import sharp from 'sharp'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'

const src = (name) => `src/assets-src/${name}`
const out = (name) => `public/images/${name}`

await mkdir('public/images', { recursive: true })

const responsive = [
  ['hero-passaporte.png', 'hero-passaporte'],
  ['aeroporto-cta.png', 'aeroporto-cta']
]

await Promise.all(responsive.flatMap(([input, name]) => [
  sharp(src(input)).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out(`${name}.webp`)),
  sharp(src(input)).resize({ width: 900 }).webp({ quality: 76 }).toFile(out(`${name}-mobile.webp`))
]))

// servicos-destinos.png é uma única imagem com quatro fotos lado a lado.
const { width: sheetWidth, height: sheetHeight } = await sharp(src('servicos-destinos.png')).metadata()
const panels = [
  ['servico-eua', 0, 0.2475],
  ['servico-canada', 0.2505, 0.4975],
  ['servico-estudante', 0.5015, 0.752],
  ['servico-passaporte', 0.7555, 1]
]

await Promise.all(panels.map(([name, from, to]) => {
  const left = Math.round(sheetWidth * from)
  const width = Math.round(sheetWidth * to) - left
  return sharp(src('servicos-destinos.png'))
    .extract({ left, top: 0, width, height: sheetHeight })
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out(`${name}.webp`))
}))

// Viajante à direita, como no layout da página de depoimentos.
await sharp(src('aeroporto-cta.png'))
  .extract({ left: 0, top: 0, width: 1037, height: 758 })
  .flop()
  .resize({ width: 1400, kernel: 'lanczos3' })
  .webp({ quality: 80 })
  .toFile(out('depoimentos-topo.webp'))

// Recortes da referência da tela Sobre: substituir por fotos originais quando houver.
const about = [
  ['sobre-topo', { left: 0, top: 86, width: 1006, height: 252 }],
  ['sobre-londres', { left: 582, top: 380, width: 323, height: 255 }],
  ['mapa-rota', { left: 470, top: 1248, width: 536, height: 184 }]
]

await Promise.all(about.map(([name, area]) =>
  sharp(src('novara-sobre-reference.jpg'))
    .extract(area)
    .resize({ width: area.width * 2, kernel: 'lanczos3' })
    .webp({ quality: 84 })
    .toFile(out(`${name}.webp`))
))

// Fotos reais da equipe: src/assets-src/equipe-wander.jpg e equipe-pricila.jpg
await Promise.all(['equipe-wander', 'equipe-pricila']
  .filter((name) => existsSync(src(`${name}.jpg`)))
  .map((name) => sharp(src(`${name}.jpg`)).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 84 }).toFile(out(`${name}.webp`))))

await Promise.all([
  sharp(src('logo-oficial.png')).resize({ width: 240 }).webp({ quality: 90, alphaQuality: 100 }).toFile(out('logo-novara.webp')),
  sharp(src('logo-oficial.png')).resize({ width: 64, height: 64, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ compressionLevel: 9 }).toFile('public/favicon.png'),
  // Rosto recortado da referência visual: substituir pela foto real do cliente.
  sharp(src('novara-home-reference.jpeg')).extract({ left: 329, top: 952, width: 40, height: 40 }).resize({ width: 160, kernel: 'lanczos3' }).webp({ quality: 88 }).toFile(out('depoimento-mariana.webp'))
])
