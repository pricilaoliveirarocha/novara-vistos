import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import styles from './Header.module.css'

const navigationItems = [
    { href: '/', label: 'Início' },
    { href: '#', label: 'Sobre nós' },
    { href: '#', label: 'Depoimentos' },
    { href: '/servicos', label: 'Serviços' },
    { href: '#', label: 'Fale conosco', hasWhatsAppIcon: true, isButton: true },
]

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link
                    href="/"
                    className={styles.brand}
                    aria-label="Vistos Prime">
                    <Image
                        src="/images/logo.svg"
                        alt="Vistos Prime"
                        width={56}
                        height={56}
                        className={styles.logoBox}
                        priority
                    />
                </Link>

                <nav
                    aria-label="Navegação principal"
                    className={styles.nav}>
                    {navigationItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`${styles.navLink}${item.isButton ? ` ${styles.navLinkButton}` : ''}`}>
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
