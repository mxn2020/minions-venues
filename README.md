# minions-venues

**Tent definitions, capacities, reservation rules, and opening schedules for Oktoberfest**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-venues/sdk minions-sdk

# Python
pip install minions-venues

# CLI (global)
npm install -g @minions-venues/cli
```

---

## CLI

```bash
# Show help
venues --help
```

---

## Python SDK

```python
from minions_venues import create_client

client = create_client()
```

---

## Project Structure

```
minions-venues/
  packages/
    core/           # TypeScript core library (@minions-venues/sdk on npm)
    python/         # Python SDK (minions-venues on PyPI)
    cli/            # CLI tool (@minions-venues/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [venues.minions.help](https://venues.minions.help)
- Blog: [venues.minions.blog](https://venues.minions.blog)
- App: [venues.minions.wtf](https://venues.minions.wtf)

---

## License

[MIT](LICENSE)
