import type { Metadata } from 'next'
import Image from 'next/image'
import { Headphones, Phone, ShieldCheck, Star, UsersRound } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

import { WHATSAPP_HREF } from '@/lib/whatsapp'

import styles from './sobre-nos.module.css'

export const metadata: Metadata = {
    title: 'Sobre nós | WK Global Visa',
    description: 'Conheça a WK Global Visa e nossa forma de cuidar de processos de vistos, passaportes e autorizações internacionais.',
}

const pillars = [
    {
        title: 'Atendimento personalizado',
        description: 'Estratégias personalizadas e alinhadas aos seus objetivos e perfil de viagem.',
        icon: UsersRound,
    },
    {
        title: 'Segurança no processo',
        description: 'Rigor técnico e transparência absoluta em cada etapa burocrática.',
        icon: ShieldCheck,
    },
    {
        title: 'Suporte do início ao fim',
        description: 'Acompanhamento completo em todas as etapas, com atenção e agilidade.',
        icon: Headphones,
    },
]

const teamMembers = [
    {
        name: 'Wander Karasek',
        role: 'CEO & Consultor',
        phone: '(21) 97604-0746',
        imageSrc: '/images/team/wander-karasek.png',
        imageAlt: 'Foto do CEO e consultor da WK Global Visa',
    },
    {
        name: 'Pricila Oliveira',
        role: 'Atendimento ao cliente & Suporte',
        phone: '(21) 97604-0746',
        imageSrc: '/images/team/pricila-oliveira.jpeg',
        imageAlt: 'Foto da atendente da WK Global Visa',
    },
]

export default function AboutPage() {
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
                            <span>SOBRE NÓS</span>
                        </div>

                        <h1 className={styles.title}>
                            Cuidamos do seu processo com <span>clareza, segurança e atenção</span> em cada etapa.
                        </h1>
                    </div>

                    <p className={styles.description}>
                        A WK Global Visa descomplica a emissão de vistos, passaportes e autorizações internacionais. Combinamos atendimento humanizado, processos inteligentes e suporte completo do início
                        ao fim para que a sua única preocupação seja arrumar as malas.
                    </p>
                </div>

                <section
                    className={styles.aboutSection}
                    aria-labelledby="quem-somos-title">
                    <div className={styles.sectionHeading}>
                        <h2 id="quem-somos-title">Quem somos</h2>
                    </div>

                    <div className={styles.aboutTextGrid}>
                        <p>
                            Há anos, transformamos planos internacionais em realidade com total tranquilidade. Nossa equipe é formada por especialistas experientes e atualizados com as exigências
                            consulares globais, cuidando minuciosamente de cada detalhe para mitigar riscos e garantir assertividade.
                        </p>
                        <p>
                            Entendemos que por trás de cada passaporte existe uma história única. É por isso que desenhamos soluções sob medida, pautadas pela transparência e comunicação clara,
                            assegurando uma jornada leve, eficiente e livre de burocracias.
                        </p>
                    </div>
                </section>

                <div className={styles.pillarsGrid}>
                    {pillars.map((item) => {
                        const Icon = item.icon

                        return (
                            <article
                                key={item.title}
                                className={`${styles.pillarCard} ui-hover-lift`}>
                                <span className={styles.pillarIconWrap}>
                                    <Icon
                                        className={styles.pillarIcon}
                                        aria-hidden="true"
                                    />
                                </span>
                                <strong>{item.title}</strong>
                                <p>{item.description}</p>
                            </article>
                        )
                    })}
                </div>

                <section
                    className={styles.teamSection}
                    aria-labelledby="equipe-title">
                    <div className={styles.sectionHeading}>
                        <h2 id="equipe-title">Conheça nossa equipe</h2>
                    </div>

                    <div className={styles.teamGrid}>
                        {teamMembers.map((member) => (
                            <article
                                key={member.name + member.role}
                                className={`${styles.teamCard} ui-hover-lift`}>
                                <span className={styles.teamImageWrap}>
                                    <Image
                                        src={member.imageSrc}
                                        alt={member.imageAlt}
                                        width={420}
                                        height={420}
                                        className={styles.teamImage}
                                    />
                                </span>

                                <div className={styles.teamInfo}>
                                    <strong>{member.name}</strong>
                                    <span>{member.role}</span>
                                    <a href={`tel:${member.phone.replace(/\D/g, '')}`}>
                                        <Phone
                                            className={styles.teamPhoneIcon}
                                            aria-hidden="true"
                                        />
                                        <span>{member.phone}</span>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <div className={styles.ctaBox}>
                    <div>
                        <strong>Pronto para dar o próximo passo?</strong>
                        <p>Conte com a nossa equipe para tornar sua viagem ou mudança para o exterior simples, segura e tranquila.</p>
                    </div>

                    <div className={styles.ctaActions}>
                        <a
                            href={WHATSAPP_HREF}
                            className={styles.primaryAction}
                            rel="noopener noreferrer"
                            target="_blank">
                            <FaWhatsapp aria-hidden="true" />
                            <span>Falar com consultor</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
