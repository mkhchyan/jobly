import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { unlink } from 'node:fs/promises'

if (!existsSync('public/img/logo.png')) {
  console.error('Cannot generate favicon as "public/img/logo.png" is missing')
  process.exit(1)
}

// https://realfavicongenerator.net/
// https://github.com/RealFaviconGenerator/cli-real-favicon

// generate icons
await execSync(
  'real-favicon generate scripts/faviconDescription.json faviconData.json public'
)

unlink('faviconData.json')

console.info(`🟢✌️ - Favicon files generated successfully`)
