import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={`fixed-top bg-white border-bottom shadow-sm ${styles.header}`}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    {/* Logo principal */}
                    <Link
                        className="navbar-brand d-flex align-items-center"
                        href="/">
                        <Image
                            src="/img/logo-vistos-prime.png"
                            alt="Vistos Prime"
                            width={160}
                            height={48}
                            priority
                            className={styles.logo}
                        />
                    </Link>

                    {/* Hover para telas menores */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Abrir menu de navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="mainNavbar">
                        {/* Links de navegação */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${styles.navLink}`}
                                    href="/">
                                    Início
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${styles.navLink}`}
                                    href="/sobre-nos">
                                    Sobre nós
                                </Link>
                            </li>

                            <li className={`nav-item dropdown ${styles.dropdownHover}`}>
                                <Link
                                    className={`nav-link dropdown-toggle ${styles.navLink}`}
                                    href="/servicos"
                                    id="servicesDropdown"
                                    role="button"
                                    aria-expanded="false">
                                    Nossos serviços
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
