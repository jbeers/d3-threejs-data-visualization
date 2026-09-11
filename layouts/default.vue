<template>
  <div
    class="slidev-layout default"
    @pointerdown="$event.currentTarget.classList.contains('demo-slide') && $event.stopPropagation()"
  >
    <slot />
  </div>
</template>
