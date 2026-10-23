export const site = {
  whatsapp: 'https://wa.me/?text=Olá%2C%20gostaria%20de%20falar%20com%20um%20especialista.',
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'Depoimentos', href: '/#depoimentos' },
    { label: 'Contato', href: '/#contato' },
  ],
}

export function normalizePath(pathname) {
  return pathname.replace(/\/$/, '') || '/'
}

export function getNavigation(pathname) {
  const currentPath = normalizePath(pathname)

  if (currentPath !== '/') return site.nav

  return site.nav.map((item) => {
    if (item.label === 'Sobre') return { ...item, href: '#sobre' }
    return { ...item, href: item.href.replace('/#', '#') }
  })
}

export function isNavigationItemActive(href, pathname) {
  const currentPath = normalizePath(pathname)

  if (href === '/sobre') return currentPath === '/sobre'
  return href === '/' && currentPath === '/'
}
