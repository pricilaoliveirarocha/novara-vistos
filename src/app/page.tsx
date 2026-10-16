import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowRight, BriefcaseBusiness, ClipboardList, FileText, GraduationCap, IdCard, Mail, MessageCircleMore, Plane, PlaneTakeoff, Star, UsersRound, type LucideIcon } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import QuickEmailForm from '@/components/home/QuickEmailForm'
import TestimonialCarousel, { type TestimonialVideoItem } from '@/components/home/TestimonialCarousel'
import VisaServiceSearch, { type VisaServiceSearchOption } from '@/components/home/VisaServiceSearch'
import { getVisaServiceLabel, getVisaServicesByIds, MAIN_VISA_SERVICE_IDS, VISA_SERVICES } from '@/data/visaServices'
import { getWhatsAppHref, WHATSAPP_HREF } from '@/lib/whatsapp'

import styles from './page.module.css'

type ServiceItem = {
    title: string
    description: string
    icon: LucideIcon
    tone: 'primary' | 'accent'
}

const serviceItems: ServiceItem[] = [
    {
        title: 'Visto de Turismo',
        description: 'Assessoria completa para vistos de turismo para os principais destinos.',
        icon: PlaneTakeoff,
        tone: 'primary',
    },
    {
        title: 'Visto de Negócios',
        description: 'Suporte para viagens de negócios, reuniões, eventos e feiras.',
        icon: BriefcaseBusiness,
        tone: 'accent',
    },
    {
        title: 'Visto de Estudante',
        description: 'Orientação para vistos acadêmicos e programas de intercâmbio.',
        icon: GraduationCap,
        tone: 'primary',
    },
    {
        title: 'Visto de Reunião Familiar',
        description: 'Vistos para visita a familiares no exterior.',
        icon: UsersRound,
        tone: 'accent',
    },
    {
        title: 'Passaporte',
        description: 'Emissão e renovação de passaporte com orientação completa.',
        icon: IdCard,
        tone: 'primary',
    },
    {
        title: 'Documentação Internacional',
        description: 'Apostilamento, traduções e documentos para o exterior.',
        icon: ClipboardList,
        tone: 'accent',
    },
]

type ProcessStep = {
    step: string
    title: string
    description: string
    icon: LucideIcon
}

const processSteps: ProcessStep[] = [
    {
        step: '1',
        title: 'Fale conosco',
        description: 'Conte seu objetivo e receba uma orientação inicial sem compromisso.',
        icon: MessageCircleMore,
    },
    {
        step: '2',
        title: 'Análise do seu caso',
        description: 'Avaliamos seu perfil, e fechamos algum serviço para indicar o melhor caminho.',
        icon: ClipboardList,
    },
    {
        step: '3',
        title: 'Preparação e envio',
        description: 'Preparamos sua documentação e acompanhamos cada etapa do processo.',
        icon: FileText,
    },
    {
        step: '4',
        title: 'Visto aprovado',
        description: 'Com tudo aprovado, você segue com passaporte em mãos rumo ao seu sonho.',
        icon: Plane,
    },
]

// Vídeos de depoimentos servidos a partir de public/videos/depoimentos
const testimonialVideos: TestimonialVideoItem[] = [
    {
        name: 'Cliente WK Global Visa',
        role: 'Depoimento sobre visto americano',
        src: '/videos/depoimentos/depo01.mp4',
    },

    {
        name: 'Cliente WK Global Visa',
        role: 'Cliente atendido para documentação internacional',
        src: '/videos/depoimentos/depo02.mp4',
    },
]

const highlightedVisaServices = getVisaServicesByIds(MAIN_VISA_SERVICE_IDS)

const visaSearchServices: VisaServiceSearchOption[] = VISA_SERVICES.map((service) => ({
    id: service.id,
    label: getVisaServiceLabel(service),
    category: service.category,
}))

const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})

const getVisaCardStyle = (flagSrc: string) =>
    ({
        '--visa-card-bg-icon': `url(${flagSrc})`,
    }) as CSSProperties

export default function Home() {
    const emailHref = 'mailto:vistosprimerj@gmail.com?subject=Tirar%20d%C3%BAvidas%20sobre%20vistos%20e%20passaporte'

    return (
        <>
            <section
                id="inicio"
                className={styles.hero}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <VisaServiceSearch services={visaSearchServices} />

                        <div className={styles.eyebrowWrapper}>
                            <Star
                                className={styles.eyebrowIcon}
                                aria-hidden="true"
                                fill="currentColor"
                            />
                            <p className={styles.eyebrow}>ASSESSORIA ESPECIALIZADA EM VISTOS E PASSAPORTE</p>
                        </div>
                        <h1 className={styles.title}>
                            Assessoria profissional e acessível para <span className={styles.redHighlight}>vistos consulares </span>e <span className={styles.redHighlight}>passaportes</span> em todo
                            Brasil
                        </h1>
                        <p className={styles.description}>Atendimento direto, seguro e organizado para cada etapa do seu processo, do primeiro documento até a aprovação.</p>

                        <div className={styles.actions}>
                            <a
                                href={WHATSAPP_HREF}
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
                            alt="Colagem visual dos serviços da WK Global Visa"
                            width={640}
                            height={640}
                            className={styles.imagesColageImage}
                            priority
                        />
                    </div>
                </div>
            </section>

            <section
                id="como-funciona"
                className={styles.processSection}>
                <div className={styles.processInner}>
                    <div className={`${styles.eyebrowWrapper} ${styles.processEyebrowWrapper}`}>
                        <Star
                            className={styles.eyebrowIcon}
                            aria-hidden="true"
                            fill="currentColor"
                        />
                        <p className={styles.eyebrow}>COMO FUNCIONA</p>
                    </div>

                    <h2 className={styles.processTitle}>Um processo simples, claro e eficiente</h2>

                    <div className={styles.processGrid}>
                        {processSteps.map((item) => {
                            const Icon = item.icon

                            return (
                                <article
                                    key={item.step}
                                    className={`${styles.processCard} ui-hover-lift`}>
                                    <span className={styles.processStepBadge}>{item.step}</span>
                                    <span className={styles.processIconWrap}>
                                        <Icon
                                            className={styles.processIcon}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <strong className={styles.processCardTitle}>{item.title}</strong>
                                    <p className={styles.processCardDescription}>{item.description}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section
                id="depoimentos"
                className={styles.testimonialsSection}>
                <div className={styles.testimonialsInner}>
                    <div className={`${styles.eyebrowWrapper} ${styles.processEyebrowWrapper}`}>
                        <Star
                            className={styles.eyebrowIcon}
                            aria-hidden="true"
                            fill="currentColor"
                        />
                        <p className={styles.eyebrow}>DEPOIMENTOS</p>
                    </div>

                    <h2 className={styles.testimonialsTitle}>Histórias de clientes que confiaram na gente</h2>
                    <p className={styles.testimonialsDescription}>Dê play e assista aos depoimentos, quem sabe o próximo pode ser você contando a sua história de sucesso com a WK Global Visa.</p>

                    <TestimonialCarousel items={testimonialVideos} />
                </div>
            </section>

            <section
                id="servicos"
                className={styles.servicesSection}>
                <div className={styles.servicesInner}>
                    <div className={`${styles.eyebrowWrapper} ${styles.processEyebrowWrapper}`}>
                        <Star
                            className={styles.eyebrowIcon}
                            aria-hidden="true"
                            fill="currentColor"
                        />
                        <p className={styles.eyebrow}>NOSSOS SERVIÇOS</p>
                    </div>

                    <h2 className={styles.servicesTitle}>Soluções completas para sua viagem</h2>

                    <div className={styles.servicesGrid}>
                        {serviceItems.map((item) => {
                            const Icon = item.icon
                            const iconToneClass = item.tone === 'accent' ? styles.serviceIconWrapAccent : styles.serviceIconWrapPrimary

                            return (
                                <article
                                    key={item.title}
                                    className={`${styles.serviceCard} ui-hover-lift`}>
                                    <span className={`${styles.serviceIconWrap} ${iconToneClass}`}>
                                        <Icon
                                            className={styles.serviceIcon}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <strong className={styles.serviceTitle}>{item.title}</strong>
                                    <p className={styles.serviceDescription}>{item.description}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section
                id="duvidas"
                className={styles.questionsSection}>
                <div className={styles.questionsInner}>
                    <div className={styles.questionsContact}>
                        <div className={`${styles.eyebrowWrapper} ${styles.questionsEyebrowWrapper}`}>
                            <Star
                                className={styles.eyebrowIcon}
                                aria-hidden="true"
                                fill="currentColor"
                            />
                            <p className={styles.eyebrow}>ENVIE SUAS DÚVIDAS</p>
                        </div>

                        <h2 className={styles.questionsTitle}>Fale com nossa equipe</h2>
                        <p className={styles.questionsDescription}>Envie um e-mail com sua dúvida e respondemos o mais rápido possível.</p>

                        <div className={styles.contactCards}>
                            <a
                                href={WHATSAPP_HREF}
                                className={styles.contactCard}
                                rel="noopener noreferrer"
                                target="_blank">
                                <span className={`${styles.contactCardIcon} ${styles.contactCardIconWhatsapp}`}>
                                    <FaWhatsapp aria-hidden="true" />
                                </span>
                                <span className={styles.contactCardText}>
                                    <strong>WhatsApp</strong>
                                    <span>Atendimento rápido e direto</span>
                                </span>
                                <span className={styles.contactCardValue}>(21) 97604-0746</span>
                            </a>

                            <a
                                href="mailto:vistosprimerj@gmail.com"
                                className={styles.contactCard}>
                                <span className={styles.contactCardIcon}>
                                    <Mail aria-hidden="true" />
                                </span>
                                <span className={styles.contactCardText}>
                                    <strong>E-mail</strong>
                                    <span>Resposta em até 24h úteis</span>
                                </span>
                                <span className={styles.contactCardValue}>vistosprimerj@gmail.com</span>
                            </a>

                            <a
                                href="https://www.instagram.com/vistosprimerj"
                                className={styles.contactCard}
                                rel="noopener noreferrer"
                                target="_blank">
                                <span className={styles.contactCardIcon}>
                                    <FaInstagram aria-hidden="true" />
                                </span>
                                <span className={styles.contactCardText}>
                                    <strong>Instagram</strong>
                                    <span>Acompanhe novidades e dicas</span>
                                </span>
                                <span className={styles.contactCardValue}>@vistosprimerj & @wkarasek</span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.questionsFormCard}>
                        <QuickEmailForm />
                    </div>
                </div>
            </section>

            <section
                id="vistos-valores"
                className={styles.visaPricingSection}>
                <div className={styles.visaPricingInner}>
                    <div className={`${styles.eyebrowWrapper} ${styles.processEyebrowWrapper}`}>
                        <Star
                            className={styles.eyebrowIcon}
                            aria-hidden="true"
                            fill="currentColor"
                        />
                        <p className={styles.eyebrow}>Nossos Serviços</p>
                    </div>
                    <h2 className={styles.visaPricingTitle}>Vistos e Valores</h2>

                    <div className={styles.visaPricingGrid}>
                        {highlightedVisaServices.map((item) => {
                            const serviceLabel = getVisaServiceLabel(item)
                            const hiringHref = getWhatsAppHref(`Olá! Quero contratar o serviço ${serviceLabel}.`)

                            return (
                                <article
                                    id={`valor-${item.id}`}
                                    data-service-id={item.id}
                                    key={item.id}
                                    style={getVisaCardStyle(item.flagSrc)}
                                    className="visa-card ui-hover-lift">
                                    <div className="visa-card__header">
                                        <Image
                                            src={item.flagSrc}
                                            alt={item.flagAlt}
                                            width={36}
                                            height={24}
                                            className="visa-card__flag"
                                        />
                                        <div className="visa-card__title-group">
                                            <strong className="visa-card__title">
                                                <span>{item.title}</span>
                                                {item.subtitle ? <span>{item.subtitle}</span> : null}
                                            </strong>
                                            <span className="visa-card__category">{item.category}</span>
                                        </div>
                                    </div>

                                    <div className="visa-card__price-wrap">
                                        <strong className="visa-card__price">{priceFormatter.format(item.price)}</strong>
                                        <span className="visa-card__caption">{item.priceCaption}</span>

                                        {item.secondaryPrice ? (
                                            <span className="visa-card__secondary-price-row">
                                                <strong className="visa-card__secondary-price">{priceFormatter.format(item.secondaryPrice)}</strong>
                                                <span className="visa-card__secondary-caption">{item.secondaryPriceCaption}</span>
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

                    <div className={styles.visaPricingFooter}>
                        <Link
                            href="/servicos"
                            className={styles.visaPricingAllServicesLink}>
                            <span>Ver todos os serviços</span>
                            <ArrowRight
                                className="visa-card__button-icon"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
