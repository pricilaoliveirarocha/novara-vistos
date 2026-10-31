export const phoneLabel = '(21) 97604-0746'
export const email = 'Novaravistos@gmail.com'

export const whatsapp = (message) =>
  `https://wa.me/5521976040746${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/depoimentos', label: 'Depoimentos' },
  { to: '/contato', label: 'Contato' }
]
