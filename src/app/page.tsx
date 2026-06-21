import Image from 'next/image'
import { ClipboardList, Clock3, FileText, Globe, Mail, MessageCircleMore, Plane, ShieldCheck, UsersRound, Star, type LucideIcon } from 'lucide-react'

import TestimonialCarousel, { type TestimonialVideoItem } from '@/components/home/TestimonialCarousel'
import { WHATSAPP_HREF } from '@/lib/whatsapp'

import styles from './page.module.css'

type FeatureItem = {
    title: string
    description: string
    icon: LucideIcon
}

const featureItems: FeatureItem[] = [
    {
        title: 'Segurança e confiança',
        description: 'Processos seguros e alinhados às exigências dos consulados.',
        icon: ShieldCheck,
    },
    {
        title: 'Agilidade no atendimento',
        description: 'Respostas rápidas e suporte em todas as etapas.',
        icon: Clock3,
    },
    {
        title: 'Atendimento personalizado',
        description: 'Soluções sob medida para o seu perfil e objetivo.',
        icon: UsersRound,
    },
    {
        title: 'Atuação internacional',
        description: 'Experiência com vistos para os principais destinos do mundo.',
        icon: Globe,
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
        title: 'Seu objetivo realizado',
        description: 'Com tudo aprovado, você segue com mais segurança para a próxima etapa.',
        icon: Plane,
    },
]

// Vídeos de depoimentos servidos a partir de public/videos/depoimentos
const testimonialVideos: TestimonialVideoItem[] = [
    {
        name: 'Cliente Vistos Prime',
        role: 'Depoimento sobre visto americano',
        src: '/videos/depoimentos/depo01.mp4',
    },

    {
        name: 'Cliente Vistos Prime',
        role: 'Cliente atendido para documentação internacional',
        src: '/videos/depoimentos/depo02.mp4',
    },
]

export default function Home() {
    const emailHref = 'mailto:vistosprimerj@gmail.com?subject=Tirar%20d%C3%BAvidas%20sobre%20vistos%20e%20passaporte'

    return (
        <>
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
                            alt="Colagem visual dos serviços da Vistos Prime"
                            width={640}
                            height={640}
                            className={styles.imagesColageImage}
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className={styles.processSection}>
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

            <section className={styles.testimonialsSection}>
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
                    <p className={styles.testimonialsDescription}>Dê play e assista aos depoimentos, quem sabe o próximo pode ser você contando a sua história de sucesso com a Vistos Prime.</p>

                    <TestimonialCarousel items={testimonialVideos} />
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className={styles.featuresInner}>
                    {featureItems.map((item) => {
                        const Icon = item.icon

                        return (
                            <article
                                key={item.title}
                                className={styles.featureCard}>
                                <span className={styles.featureIconWrap}>
                                    <Icon
                                        className={styles.featureIcon}
                                        aria-hidden="true"
                                    />
                                </span>
                                <div className={styles.featureText}>
                                    <strong className={styles.featureTitle}>{item.title}</strong>
                                    <p className={styles.featureDescription}>{item.description}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
