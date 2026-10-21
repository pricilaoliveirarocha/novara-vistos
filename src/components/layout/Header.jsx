import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Brand from '../ui/Brand'
import { site } from '../../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header" data-open={open}>
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal">
        {site.nav.map((item, index) => <a className={index === 0 ? 'active' : ''} key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <span className="header-balance" aria-hidden="true" />
      <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav className="mobile-nav" aria-label="Navegação móvel">
      {site.nav.map(item => <a key={item.href} onClick={() => setOpen(false)} href={item.href}>{item.label}</a>)}
    </nav>
  </header>
}
