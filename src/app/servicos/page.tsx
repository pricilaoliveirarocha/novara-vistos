import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowLeft, MessageCircleMore } from 'lucide-react'

import { getVisaServiceLabel, VISA_SERVICES } from '@/data/visaServices'
import { getWhatsAppHref } from '@/lib/whatsapp'

import styles from './servicos.module.css'

export const metadata: Metadata = {
    title: 'Serviços | Vistos Prime',
    description: 'Consulte os serviços de vistos disponíveis na Vistos Prime.',
}

const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

const getVisaCardStyle = (flagSrc: string) =>
    ({
        '--visa-card-bg-icon': `url(${flagSrc})`,
    }) as CSSProperties

export default function ServicesPage() {
    return (
        <section className={styles.page}>
            <div className={styles.inner}>
                <div className={styles.heading}>
                    <Link
                        href="/#vistos-valores"
                        className={styles.backLink}>
                        <ArrowLeft
                            className={styles.buttonIcon}
                            aria-hidden="true"
                        />
                        <span>Voltar</span>
                    </Link>

                    <div>
                        <p className={styles.eyebrow}>SERVIÇOS DE VISTOS</p>
                        <h1 className={styles.title}>Todos os serviços</h1>
                    </div>
                </div>

                <div className={styles.grid}>
                    {VISA_SERVICES.map((service) => {
                        const serviceLabel = getVisaServiceLabel(service)
                        const hiringHref = getWhatsAppHref(`Olá! Quero contratar o serviço ${serviceLabel}.`)

                        return (
                            <article
                                id={`servico-${service.id}`}
                                data-service-id={service.id}
                                key={service.id}
                                style={getVisaCardStyle(service.flagSrc)}
                                className="visa-card ui-hover-lift">
                                <div className="visa-card__header">
                                    <Image
                                        src={service.flagSrc}
                                        alt={service.flagAlt}
                                        width={36}
                                        height={24}
                                        className="visa-card__flag"
                                    />

                                    <div className="visa-card__title-group">
                                        <strong className="visa-card__title">
                                            <span>{service.title}</span>
                                            {'subtitle' in service && service.subtitle ? <span>{service.subtitle}</span> : null}
                                        </strong>
                                        <span className="visa-card__category">{service.category}</span>
                                    </div>
                                </div>

                                <div className="visa-card__price-wrap">
                                    <strong className="visa-card__price">{priceFormatter.format(service.price)}</strong>
                                    <span className="visa-card__caption">{service.priceCaption}</span>
                                </div>

                                <a
                                    href={hiringHref}
                                    className="visa-card__hire-button"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <MessageCircleMore
                                        className="visa-card__button-icon"
                                        aria-hidden="true"
                                    />
                                    <span>Contratar</span>
                                </a>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
