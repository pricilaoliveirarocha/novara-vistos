import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Brand from '../ui/Brand'
import GoldButton from '../ui/GoldButton'
import { getNavigation, isNavigationItemActive, site } from '../../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const currentPath = window.location.pathname
  const navItems = getNavigation(currentPath)

  const renderNavigationItems = (closeMenu = false) =>
    navItems.map(({ href, label }) => (
      <a
        className={isNavigationItemActive(href, currentPath) ? 'active' : ''}
        href={href}
        key={href}
        onClick={closeMenu ? () => setOpen(false) : undefined}
      >
        {label}
      </a>
    ))

  return (
    <header className="header" data-open={open}>
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Navegação principal">
          {renderNavigationItems()}
        </nav>

        <GoldButton className="header-contact" href={site.whatsapp}>
          Fale com nosso time
        </GoldButton>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <nav className="mobile-nav" aria-label="Navegação móvel">
        {renderNavigationItems(true)}
      </nav>
    </header>
  )
}
