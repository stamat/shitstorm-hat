const { execSync } = require('node:child_process')
const { existsSync } = require('node:fs')

test('build produces dist output', () => {
  execSync('npm run build', { stdio: 'inherit' })
  for (const f of ['dist/index.html', 'dist/scripts/script.js', 'dist/styles/style.css', 'dist/styles/tailwind.css', 'dist/static/fragments/quote.html']) {
    expect(existsSync(f)).toBe(true)
  }
}, 30000)
