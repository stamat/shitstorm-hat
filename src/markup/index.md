---
layout: default
---

# {{ site.title }}

{{ site.description }}

Discover [Poops](https://github.com/stamat/poops/) - super fast and easy bundler and static site generator.

<img src="{{ relativePathPrefix }}static/poop.png" class="mb-8" alt="Poops" width="48" height="48">

## Tailwind CSS

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

## Alpine.js

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

## htmx

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
