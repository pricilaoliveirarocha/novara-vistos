import type { Metadata } from 'next'
import { Star } from 'lucide-react'

import { VISA_SERVICES } from '@/data/visaServices'

import ServicesCatalog from './ServicesCatalog'
import styles from './servicos.module.css'

export const metadata: Metadata = {
    title: 'Serviços | Vistos Prime',
    description: 'Consulte os serviços de vistos, autorizações e passaporte disponíveis na Vistos Prime.',
}

export default function ServicesPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.eyebrow}>
                            <Star
                                className={styles.eyebrowIcon}
                                aria-hidden="true"
                                fill="currentColor"
                            />
                            <span>NOSSOS SERVIÇOS</span>
                        </div>

                        <h1 className={styles.title}>
                            Encontre a assessoria <span>ideal para sua viagem</span>
                        </h1>
                    </div>

                    <p className={styles.description}>
                        soluções completas e personalizadas para a emissão de vistos consulares, autorizações de viagem e passaportes. Unimos rigor técnico, agilidade e uma assessoria altamente
                        especializada!
                    </p>
                </div>

                <ServicesCatalog services={VISA_SERVICES} />
            </div>
        </section>
    )
}
