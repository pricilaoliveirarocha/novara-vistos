'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { WHATSAPP_HREF } from '@/lib/whatsapp'

import styles from './Header.module.css'

const navigationItems = [
    { href: '/', label: 'Início' },
    { href: '#', label: 'Sobre nós' },
    { href: '#', label: 'Depoimentos' },
    { href: '/servicos', label: 'Serviços' },
    { href: WHATSAPP_HREF, label: 'Fale conosco', hasWhatsAppIcon: true, isButton: true, isExternal: true },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link
                    href="/"
                    className={styles.brand}
                    aria-label="Vistos Prime"
                    onClick={() => setIsMenuOpen(false)}>
                    <Image
                        src="/images/logo.svg"
                        alt="Vistos Prime"
                        width={56}
                        height={56}
                        className={styles.logoBox}
                        priority
                    />
                </Link>

                <button
                    type="button"
                    className={styles.menuButton}
                    aria-expanded={isMenuOpen}
                    aria-controls="header-navigation"
                    aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    onClick={() => setIsMenuOpen((current) => !current)}>
                    {isMenuOpen ? (
                        <X aria-hidden="true" />
                    ) : (
                        <Menu aria-hidden="true" />
                    )}
                </button>

                <nav
                    id="header-navigation"
                    aria-label="Navegação principal"
                    className={`${styles.nav}${isMenuOpen ? ` ${styles.navOpen}` : ''}`}>
                    {navigationItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            rel={item.isExternal ? 'noopener noreferrer' : undefined}
                            target={item.isExternal ? '_blank' : undefined}
                            onClick={() => setIsMenuOpen(false)}
                            className={`${styles.navLink}${item.isButton ? ` ${styles.navLinkButton} ui-hover-lift` : ''}`}>
                            <span>{item.label}</span>
                            {item.hasWhatsAppIcon ? (
                                <FaWhatsapp
                                    aria-hidden="true"
                                    className={styles.navIcon}
                                />
                            ) : null}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
