# Project Coding Standards

Coding Standards Profiles: `chris-core`, `chris-js-ts`, `chris-web-app`

## Repository Notes

- Static zero-dependency portfolio site served directly as ES modules (`index.html`, `styles.css`,
  `src/app.js`, `src/data.js`) and verified with `bun test`.
- Standalone `chris-web-app` CSS mode applies: use `--sdc-*` custom properties directly without
  unused `--client-*` override fallbacks.

