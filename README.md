# 💩🌪️ Shitstorm - HAT

**H**tmx + **A**lpine + **T**ailwind — the [Shitstorm](https://github.com/stamat/shitstorm) base template with a hypermedia frontend bolted on.

A small [Poops](https://github.com/stamat/poops/) template for static sites with JS + SCSS bundling and Markdown-based page generation, shipping [htmx](https://htmx.org/) for server-driven interactions, [Alpine.js](https://alpinejs.dev/) for local component state, and [Tailwind CSS](https://tailwindcss.com/) v4 for styling.

## Out-of-the-box stack

| Layer         | Included                                                               |
| ------------- | ---------------------------------------------------------------------- |
| Runtime       | Node.js + npm                                                          |
| Build tool    | `poops` (`npm run dev`, `npm run build`)                               |
| Scripts       | ES modules from `src/scripts/script.js`                                |
| Styles        | SCSS entry points in `src/styles/`                                     |
| CSS framework | Tailwind CSS v4 via the `postcss` pipeline (`src/styles/tailwind.css`) |
| Interactivity | Alpine.js + htmx, bundled into `src/scripts/script.js`                 |
| Markup        | Markdown content + layout templating in `src/markup/`                  |
| Data          | YAML data files (example: `src/markup/_data/fonts.yaml`)               |
| Static assets | Copied from `src/static` to `dist`                                     |
| Dev UX        | Local server on port `4040` + live reload                              |
| Lint          | ESLint (JS) + Stylelint (SCSS)                                         |
| Tests         | Jest (`npm test`)                                                      |
| CI            | GitHub Actions — lint + test on push/PR, deploy on `main`              |
| Output        | Built site in `dist/` with minified assets + source maps               |

## Project structure

```text
src/
  markup/     # pages, layouts, data
  scripts/    # JavaScript entry points
  styles/     # SCSS entry point
  static/     # copied as-is to dist
dist/         # generated output
poops.json    # build + serve config
```

## Quick start

Scaffold a project from this template with [create-poops](https://github.com/stamat/create-poops):

```bash
npm create poops@latest my-app hat
```

Omit the template name to pick from a prompt (`base`, `sulphuris`, `hat`), or omit the target directory to scaffold into the current one. Needs `git` on your `PATH`; the clone's history is dropped so you start clean.

Then:

```bash
cd my-app
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Checks

```bash
npm run lint   # ESLint (JS) + Stylelint (SCSS)
npm test       # Jest — builds and asserts dist/ output
```

CI runs both on every push and pull request ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)); pushes to `main` also deploy to GitHub Pages ([`.github/workflows/pages.yml`](.github/workflows/pages.yml)).
