import assert from 'node:assert/strict'
import { once } from 'node:events'
import { setTimeout as delay } from 'node:timers/promises'

export async function connect(cdp = process.env.CDP_URL || 'http://127.0.0.1:9222') {
  // Create our own tab; never navigate an existing user tab.
  const target = await (await fetch(`${cdp}/json/new?about:blank`, { method: 'PUT' })).json()
  const socket = new WebSocket(target.webSocketDebuggerUrl)
  await once(socket, 'open')
  let sequence = 0
  const pending = new Map(), errors = [], responses = []
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data)
    if (message.id) {
      const [resolve, reject] = pending.get(message.id)
      pending.delete(message.id)
      message.error ? reject(message.error) : resolve(message.result)
    } else if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails)
    else if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') errors.push(message.params.args)
    else if (message.method === 'Network.responseReceived') responses.push(message.params.response)
  })
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    pending.set(++sequence, [resolve, reject])
    socket.send(JSON.stringify({ id: sequence, method, params }))
  })
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    assert.ok(!result.exceptionDetails, JSON.stringify(result.exceptionDetails))
    return result.result.value
  }
  const waitFor = async expression => {
    for (let i = 0; i < 150; i++) {
      if (await evaluate(expression)) return
      await delay(100)
    }
    throw new Error(`Timed out: ${expression}`)
  }
  const key = async (key, code, windowsVirtualKeyCode) => {
    for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode })
  }
  const close = async () => {
    socket.close()
    await fetch(`${cdp}/json/close/${target.id}`)
  }
  return { send, evaluate, waitFor, key, errors, responses, close }
}
