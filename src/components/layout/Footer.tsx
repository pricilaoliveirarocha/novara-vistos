import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { WHATSAPP_HREF } from '@/lib/whatsapp'

import styles from './Footer.module.css'

const quickLinks = [
    { href: '/#inicio', label: 'Início' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/#como-funciona', label: 'Como funciona' },
    { href: '/#depoimentos', label: 'Depoimentos' },
    { href: '/sobre-nos', label: 'Sobre nós' },
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brandColumn}>
                    <Link
                        href="/#inicio"
                        className={styles.brand}
                        aria-label="WK Global Visa - Voltar para o início">
                        <Image
                            src="/images/logo.svg"
                            alt=""
                            width={74}
                            height={74}
                            className={styles.logo}
                        />
                        <span className={styles.wordmark}>
                            WK<br></br>
                            <span>Global Visa</span>
                        </span>
                    </Link>
                </div>

                <div className={styles.aboutColumn}>
                    <h2 className={styles.heading}>Sobre nós</h2>
                    <p className={styles.text}>A WK Global Visa é especializada em assessoria para vistos, passaportes e documentação internacional, oferecendo atendimento claro, direto e eficiente.</p>

                    <div className={styles.socialLinks}>
                        <a
                            href={WHATSAPP_HREF}
                            className={styles.socialLink}
                            aria-label="WhatsApp da WK Global Visa"
                            rel="noopener noreferrer"
                            target="_blank">
                            <FaWhatsapp aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.instagram.com/wkglobalvisa"
                            className={styles.socialLink}
                            aria-label="Instagram da WK Global Visa"
                            rel="noopener noreferrer"
                            target="_blank">
                            <FaInstagram aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <nav
                    className={styles.linksColumn}
                    aria-label="Links rápidos do rodapé">
                    <h2 className={styles.heading}>Links rápidos</h2>
                    <ul className={styles.linkList}>
                        {quickLinks.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={styles.footerLink}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.contactColumn}>
                    <h2 className={styles.heading}>Contato</h2>
                    <ul className={styles.contactList}>
                        <li>
                            <FaWhatsapp
                                className={styles.contactIcon}
                                aria-hidden="true"
                            />
                            <a
                                href={WHATSAPP_HREF}
                                rel="noopener noreferrer"
                                target="_blank">
                                (21) 97604-0746
                            </a>
                        </li>
                        <li>
                            <Mail
                                className={styles.contactIcon}
                                aria-hidden="true"
                            />
                            <a href="mailto:vistosprimerj@gmail.com">vistosprimerj@gmail.com</a>
                        </li>
                        <li>
                            <MapPin
                                className={styles.contactIcon}
                                aria-hidden="true"
                            />
                            <span>Atendimento online para todo o Brasil</span>
                        </li>
                    </ul>
                </div>
            </div>

            <p className={styles.copyright}>© 2026 WK Global Visa. Todos os direitos reservados.</p>
        </footer>
    )
}
