'use client'

import Image from 'next/image'
import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'
import { MessageCircleMore, Search } from 'lucide-react'

import { getVisaServiceLabel, type VisaService } from '@/data/visaServices'
import { getWhatsAppHref } from '@/lib/whatsapp'

import styles from './servicos.module.css'

type ServicesCatalogProps = {
    readonly services: readonly VisaService[]
}

const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

const getVisaCardStyle = (flagSrc: string) =>
    ({
        '--visa-card-bg-icon': `url(${flagSrc})`,
    }) as CSSProperties

function normalizeSearchValue(value: string) {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
}

function getSearchText(service: VisaService) {
    return [getVisaServiceLabel(service), service.category, service.flagAlt, service.id, ...(service.keywords ?? [])].join(' ')
}

export default function ServicesCatalog({ services }: ServicesCatalogProps) {
    const [query, setQuery] = useState('')

    const filteredServices = useMemo(() => {
        const normalizedQuery = normalizeSearchValue(query.trim())

        if (!normalizedQuery) {
            return services
        }

        return services.filter((service) => normalizeSearchValue(getSearchText(service)).includes(normalizedQuery))
    }, [query, services])

    return (
        <>
            <div className={styles.searchBar}>
                <Search
                    className={styles.searchIcon}
                    aria-hidden="true"
                />
                <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar serviço, país ou categoria"
                    aria-label="Buscar serviço, país ou categoria"
                />
            </div>

            {filteredServices.length > 0 ? (
                <div className={styles.grid}>
                    {filteredServices.map((service) => {
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
                                            {service.subtitle ? <span>{service.subtitle}</span> : null}
                                        </strong>
                                        <span className="visa-card__category">{service.category}</span>
                                    </div>
                                </div>

                                <div className="visa-card__price-wrap">
                                    <strong className="visa-card__price">{priceFormatter.format(service.price)}</strong>
                                    <span className="visa-card__caption">{service.priceCaption}</span>

                                    {service.secondaryPrice ? (
                                        <span className="visa-card__secondary-price-row">
                                            <strong className="visa-card__secondary-price">{priceFormatter.format(service.secondaryPrice)}</strong>
                                            <span className="visa-card__secondary-caption">{service.secondaryPriceCaption}</span>
                                        </span>
                                    ) : null}
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
            ) : (
                <p className={styles.emptyState}>Nenhum serviço encontrado.</p>
            )}
        </>
    )
}
