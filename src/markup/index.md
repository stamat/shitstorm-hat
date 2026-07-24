---
layout: default
---

# {{ site.title }}

{{ site.description }}

Discover [Poops](https://github.com/stamat/poops/) - super fast and easy bundler and static site generator.

<a href="https://github.com/stamat/shitstorm-hat" class="mb-8 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white no-underline ring-1 ring-slate-800 hover:bg-slate-800">
  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.05-.13-.36-.95.08-1.98 0 0 .67-.21 2.2.82.63-.18 1.31-.27 1.98-.27.67 0 1.35.09 1.98.27 1.53-1.04 2.2-.82 2.2-.82.44 1.03.13 1.85.08 1.98.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A7.995 7.995 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
  </svg>
  View on GitHub
</a>

## [Tailwind CSS](https://tailwindcss.com/)

Utility classes, compiled by the PostCSS pipeline in `poops.json` into `dist/styles/tailwind.css`.

<div class="grid gap-4 sm:grid-cols-3">
  <div class="rounded-lg bg-slate-900 p-4 ring-1 ring-slate-800">
    <div class="text-xs uppercase tracking-wide text-slate-500">Styles</div>
    <div class="mt-1 text-lg font-semibold text-white">Tailwind v4</div>
  </div>
  <div class="rounded-lg bg-slate-900 p-4 ring-1 ring-slate-800">
    <div class="text-xs uppercase tracking-wide text-slate-500">Behaviour</div>
    <div class="mt-1 text-lg font-semibold text-white">Alpine.js</div>
  </div>
  <div class="rounded-lg bg-slate-900 p-4 ring-1 ring-slate-800">
    <div class="text-xs uppercase tracking-wide text-slate-500">Requests</div>
    <div class="mt-1 text-lg font-semibold text-white">htmx</div>
  </div>
</div>

## [Alpine.js](https://alpinejs.dev/)

State and events without leaving the markup.

<div x-data="{ count: 0, open: false }" class="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-800">
  <div class="flex items-center gap-3">
    <button type="button" @click="count--" class="h-9 w-9 rounded bg-slate-800 text-lg text-white hover:bg-slate-700">-</button>
    <span x-text="count" class="min-w-10 text-center text-2xl font-bold text-white"></span>
    <button type="button" @click="count++" class="h-9 w-9 rounded bg-slate-800 text-lg text-white hover:bg-slate-700">+</button>
    <button type="button" @click="open = !open" x-text="open ? 'Hide' : 'Show'" class="ml-auto rounded bg-sky-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-500"></button>
  </div>
  <p x-show="open" x-transition class="mt-4 text-sm text-slate-400">
    Counter is at <span x-text="count" class="font-semibold text-white"></span>. All of it is <code>x-data</code>, <code>x-text</code> and <code>@click</code> - no component file, no build step of its own.
  </p>
</div>

## [htmx](https://htmx.org/)

`hx-get` fetches an HTML fragment and swaps it into the page - no JSON, no client-side rendering.

<div class="rounded-lg bg-slate-900 p-6 ring-1 ring-slate-800">
  <button type="button"
    hx-get="{{ relativePathPrefix }}static/fragments/quote.html"
    hx-target="#htmx-result"
    hx-swap="innerHTML"
    class="rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500">
    Load fragment
  </button>
  <div id="htmx-result" class="mt-4 text-sm text-slate-500">Nothing loaded yet.</div>
</div>
