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
