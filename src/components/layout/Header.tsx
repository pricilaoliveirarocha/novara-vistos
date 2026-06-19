import Image from 'next/image'
import Link from 'next/link'
import { FaPlaneDeparture } from 'react-icons/fa6'

import logo from '@/img/logo-header.png'

import styles from './Header.module.css'

function NavLinkLabel({ label }: Readonly<{ label: string }>) {
    return (
        <>
            <span className={styles.navText}>{label}</span>
            <span
                aria-hidden="true"
                className={styles.navPlane}>
                <FaPlaneDeparture className={styles.navPlaneIcon} />
            </span>
        </>
    )
}

export default function Header() {
    return (
        <header className={`fixed-top ${styles.header}`}>
            <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
                <div className="container">
                    <Link
                        className={`navbar-brand d-flex align-items-center ${styles.brand}`}
                        href="/">
                        <Image
                            src={logo}
                            alt="Vistos Prime"
                            width={75}
                            height={56}
                            priority
                            className={styles.logo}
                        />
                    </Link>

                    <button
                        className={`navbar-toggler ${styles.toggler}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Abrir menu de navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className={`collapse navbar-collapse ${styles.navbarCollapse}`}
                        id="mainNavbar">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center ${styles.navList}`}>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${styles.navLink}`}
                                    href="/">
                                    <NavLinkLabel label="Início" />
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${styles.navLink}`}
                                    href="/sobre-nos">
                                    <NavLinkLabel label="Sobre nós" />
                                </Link>
                            </li>

                            <li className={`nav-item dropdown ${styles.dropdownHover}`}>
                                <Link
                                    className={`nav-link dropdown-toggle ${styles.navLink}`}
                                    href="/servicos"
                                    id="servicesDropdown"
                                    role="button"
                                    aria-expanded="false">
                                    <NavLinkLabel label="Nossos serviços" />
                                </Link>

                                <ul
                                    className={`dropdown-menu border-0 shadow ${styles.dropdownMenu}`}
                                    aria-labelledby="servicesDropdown">
                                    <li>
                                        <Link
                                            className={`dropdown-item ${styles.dropdownItem}`}
                                            href="/servicos/visto-americano">
                                            Visto Americano
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className={`dropdown-item ${styles.dropdownItem}`}
                                            href="/servicos/visto-canadense">
                                            Visto Canadense
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className={`dropdown-item ${styles.dropdownItem}`}
                                            href="/servicos/eta-esta-evisa">
                                            ETA, ESTA e E-Visa
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className={`dropdown-item ${styles.dropdownItem}`}
                                            href="/servicos/passaporte-brasileiro">
                                            Passaporte Brasileiro
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className={`dropdown-item ${styles.dropdownItem}`}
                                            href="/servicos/outros-vistos">
                                            Outros vistos e serviços
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
