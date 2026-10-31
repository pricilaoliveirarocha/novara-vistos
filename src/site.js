export const phoneLabel = '(21) 98225-6381'
export const email = 'Novaravistos@gmail.com'

export const whatsapp = (message) =>
  `https://wa.me/5521982256381${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/contato', label: 'Contato' }
]
