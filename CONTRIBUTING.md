# Contributing to Shitstorm HAT

Issues and pull requests are welcome.

Shitstorm HAT is the [Poops](https://github.com/stamat/poops) template wired for
**h**tmx, **A**lpine and **T**ailwind: `poops.json`, a `src/` laid out the way
Poops expects, and those three ready to use. Everything past that is deliberately
absent — whatever lands here, everyone who scaffolds from this template carries,
so a change that adds a dependency needs to argue for itself.

## Getting set up

```bash
git clone https://github.com/stamat/shitstorm-hat.git
cd shitstorm-hat
npm install
```

```bash
script/server    # dev server with live reload, http://localhost:4040
script/build     # builds the site into dist/
script/test      # jest
script/lint      # eslint + stylelint
```

Tailwind runs through PostCSS, configured in `poops.json` — there is no
`tailwind.config.js` to look for.

## Reporting a bug

Say what you changed in `poops.json` or `src/`, what you expected in `dist/`, and
what the terminal printed. Include your Node version and OS — the build runs on
Windows too, and path bugs show up there first.

If the problem is in the build itself rather than in this template's config, it
belongs in [poops](https://github.com/stamat/poops/issues).

## Pull requests

- **Keep the template minimal.** A feature most projects will delete on day one
  is a feature that belongs in a fork, not here.
- **Check the build.** `script/test` runs the build and asserts `dist/` came out;
  if you add an output, assert it there too.
- **Run `script/lint`.** `eslint` and `stylelint` are the authority, and CI runs
  them on Node 22 and 24, on Linux and Windows.
- **Add a changelog entry** under `## [Unreleased]` in
  [CHANGELOG.md](CHANGELOG.md) — that file explains the format.

Commit messages are freeform, write something that says what changed.

## How a release works

`script/publish [version]` bumps `package.json`, runs `script/changelog` to cut
`[Unreleased]` into a released entry, tags and pushes, and offers to open a
GitHub release with that entry as the body. This package is `private` and is
never published to npm — the tag and the release are the whole of it.
