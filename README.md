# D3 Three.js Data Visualization

Placeholder project for a D3 and Three.js data visualization.

The initial page is available in `index.html`.

## Release workflow

Every push to `main` creates a published GitHub release and triggers the
`static.yml` workflow in `jbeers/jbeers.github.io`.

The repository needs a `SITE_REBUILD_TOKEN` Actions secret containing a
fine-grained token with Actions write access to `jbeers/jbeers.github.io`.
