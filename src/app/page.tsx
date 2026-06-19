import type { Metadata } from 'next'
import Image from 'next/image'

import logo from '@/img/logo-full-no-bg.png'
import HeroBackgroundVideo from '@/components/home/HeroBackgroundVideo'

import styles from './page.module.css'

export const metadata: Metadata = {
    title: 'Assessoria para Vistos, Passaporte e Documentação Internacional | Vistos Prime',
    description: 'Assessoria especializada para visto americano, visto canadense, ETA, ESTA, e-Visa e passaporte brasileiro, com atendimento claro e orientação documental em cada etapa.',
    keywords: ['visto americano', 'visto canadense', 'assessoria para vistos', 'passaporte brasileiro', 'ETA', 'ESTA', 'e-Visa', 'documentação internacional'],
}

export default function Home() {
    return (
        <section
            aria-labelledby="hero-title"
            className={styles.hero}>
            <HeroBackgroundVideo
                className={styles.heroVideo}
                src="/media/map.mp4"
            />

            <div
                aria-hidden="true"
                className={styles.heroOverlay}
            />

            <div className={`container ${styles.heroContainer}`}>
                <div
                    aria-hidden="true"
                    className={styles.heroVisual}>
                    <Image
                        src={logo}
                        alt=""
                        className={styles.heroVisualLogo}
                        priority
                    />
                </div>

                <div className={styles.heroContent}>
                    <h1
                        id="hero-title"
                        className={`${styles.reveal} ${styles.delay1}`}>
                        Assessoria profissional e acessível para vistos e passaporte
                    </h1>

                    <p className={`${styles.reveal} ${styles.delay2}`}>Suporte para vistos e documentação internacional com atendimento claro, direto e eficiente.</p>
                </div>
            </div>
        </section>
    )
}
