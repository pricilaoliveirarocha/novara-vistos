import Image from 'next/image'
import { Mail, MessageCircleMore } from 'lucide-react'

import styles from './page.module.css'
import { Star } from 'lucide-react'

export default function Home() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')
    const whatsappMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? 'Olá! Tenho interesse em saber mais sobre os serviços da Vistos Prime.'
    const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}` : '#contato'
    const emailHref = 'mailto:vistosprimerj@gmail.com?subject=Tirar%20d%C3%BAvidas%20sobre%20vistos%20e%20passaporte'

    return (
        <section
            id="inicio"
            className={styles.hero}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.eyebrowWrapper}>
                        <Star
                            className={styles.eyebrowIcon}
                            aria-hidden="true"
                            fill="currentColor"
                        />
                        <p className={styles.eyebrow}>ASSESSORIA ESPECIALIZADA EM VISTOS E PASSAPORTE</p>
                    </div>
                    <h1 className={styles.title}>
                        Assessoria profissional e acessível para <span className={styles.redHighlight}>vistos consulares </span>e <span className={styles.redHighlight}>passaportes</span>
                    </h1>
                    <p className={styles.description}>Atendimento direto, seguro e organizado para cada etapa do seu processo, do primeiro documento até a aprovação.</p>

                    <div className={styles.actions}>
                        <a
                            href={whatsappHref}
                            className={`${styles.actionCard} ${styles.actionCardPrimary}`}
                            rel="noopener noreferrer"
                            target="_blank">
                            <span className={styles.actionIconWrap}>
                                <MessageCircleMore
                                    className={styles.actionIcon}
                                    aria-hidden="true"
                                />
                            </span>
                            <span className={styles.actionText}>
                                <strong className={styles.actionTitle}>Tirar dúvidas com especialista</strong>
                                <span className={styles.actionDescription}>Atendimento rápido para esclarescer suas dúvidas via WhatsApp</span>
                            </span>
                        </a>

                        <a
                            href={emailHref}
                            className={`${styles.actionCard} ${styles.actionCardSecondary}`}>
                            <span className={styles.actionIconWrap}>
                                <Mail
                                    className={styles.actionIcon}
                                    aria-hidden="true"
                                />
                            </span>
                            <span className={styles.actionText}>
                                <strong className={styles.actionTitle}>Tirar dúvidas via email</strong>
                                <span className={styles.actionDescription}>Envie sua dúvida por email e receba uma resposta mais detalhada</span>
                            </span>
                        </a>
                    </div>
                </div>
                <div className={styles.imagesColage}>
                    <Image
                        src="/images/hero/imagesColage.svg"
                        alt="Colagem visual dos serviços da Vistos Prime"
                        width={640}
                        height={640}
                        className={styles.imagesColageImage}
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
