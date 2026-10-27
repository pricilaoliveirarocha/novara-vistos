import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

await mkdir('public/images', { recursive: true })

const images = [
  ['hero-passaporte.png', 'hero-passaporte.webp', 1920, 82],
  ['aeroporto-cta.png', 'aeroporto-cta.webp', 1920, 82],
  ['servicos-destinos.png', 'servicos-destinos.webp', 1920, 82]
]

await Promise.all(images.map(([input, output, width, quality]) =>
  sharp(`src/assets-src/${input}`).resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(`public/images/${output}`)
))

await Promise.all([
  sharp('src/assets-src/logo-oficial.png')
    .resize({ width: 360, withoutEnlargement: true })
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile('public/images/logo-novara.webp'),
  sharp('src/assets-src/logo-oficial.png')
    .resize({ width: 64, height: 64, fit: 'contain' })
    .png({ compressionLevel: 9 })
    .toFile('public/favicon.png')
])
