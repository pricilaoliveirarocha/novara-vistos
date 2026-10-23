import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  Globe2,
  Landmark,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import FlightRoute from '../components/home/FlightRoute'
import GoldButton from '../components/ui/GoldButton'
import { site } from '../data/site'

gsap.registerPlugin(ScrollTrigger)

const heroFeatures = [
  { icon: ShieldCheck, title: 'Processo seguro', detail: 'e sem complicações' },
  { icon: UsersRound, title: 'Atendimento', detail: 'personalizado' },
  { icon: Globe2, title: 'Em todo', detail: 'o Brasil' },
]

const services = [
  {
    title: 'Visto Americano',
    description: 'Turismo, negócios, estudos e intercâmbio.',
    image: '/images/service-usa.png',
    icon: Landmark,
    category: 'Estados Unidos',
  },
  {
    title: 'Visto Canadense',
    description: 'Turismo, estudos, trabalho e residência.',
    image: '/images/service-canada.png',
    icon: Sparkles,
    category: 'Canadá',
  },
  {
    title: 'Visto para Europa',
    description: 'Turismo, estudos e negócios.',
    image: '/images/service-europe.png',
    icon: Globe2,
    category: 'Europa',
  },
  {
    title: 'Passaportes',
    description: 'Emissão e renovação com orientação documental.',
    image: '/images/passport.jpg',
    icon: FileCheck2,
    category: 'Documentação',
  },
]

const advisorySteps = [
  {
    icon: FileCheck2,
    title: 'Análise documental',
    copy: 'Conferimos seu perfil e cada documento antes do envio.',
  },
  {
    icon: BadgeCheck,
    title: 'Estratégia consular',
    copy: 'Orientamos o melhor caminho para o seu objetivo de viagem.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Preparação para viajar',
    copy: 'Você recebe suporte até a conclusão do processo.',
  },
]

function Hero() {
  return (
    <section id="inicio" className="home-hero">
      <div className="home-hero-bg" aria-hidden="true" />
      <div className="home-hero-shade" aria-hidden="true" />

      <div className="container home-hero-inner">
        <div className="home-hero-copy">
          <p className="eyebrow">Assessoria de vistos consulares</p>
          <h1>
            <span>Seu mundo,</span>
            <em>sem fronteiras.</em>
          </h1>
          <p className="home-hero-description">
            Cuidamos de todo o processo para você conquistar seus vistos e viajar com tranquilidade.
          </p>

          <GoldButton className="home-hero-button" href={site.whatsapp}>
            Fale com um especialista
          </GoldButton>

          <div className="home-features">
            {heroFeatures.map(({ icon: Icon, title, detail }) => (
              <div key={title}>
                <span>
                  <Icon aria-hidden="true" />
                </span>
                <p>
                  {title}
                  <br />
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  const { title, description, image, icon: Icon, category } = service

  return (
    <article className="home-service-card">
      <div className="home-service-image">
        <img src={image} alt="" loading="lazy" />
        <span>
          <Icon aria-hidden="true" />
        </span>
      </div>

      <div className="home-service-body">
        <span className="home-service-category">{category}</span>
        <h3>{title}</h3>
        <div>
          <p>{description}</p>
          <a href={site.whatsapp} aria-label={`Saiba mais sobre ${title}`}>
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}

function Advisory() {
  return (
    <section className="home-advisory" aria-labelledby="advisory-title">
      <div className="container home-advisory-grid">
        <div className="home-advisory-image">
          <img
            src="/images/passport.jpg"
            alt="Passaporte e documentos preparados para uma viagem internacional"
            loading="lazy"
          />
          <span>Documentação revisada com atenção aos detalhes</span>
        </div>

        <div className="home-advisory-copy">
          <p className="eyebrow">Assessoria completa</p>
          <h2 id="advisory-title">
            Sua viagem começa
            <br />
            <em>antes do embarque.</em>
          </h2>
          <p className="home-advisory-intro">
            Transformamos exigências consulares em um processo claro, organizado e acompanhado por
            especialistas.
          </p>

          <div className="home-advisory-steps">
            {advisorySteps.map(({ icon: Icon, title, copy }, index) => (
              <article key={title}>
                <span className="home-advisory-number">0{index + 1}</span>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="home-services">
      <div className="home-services-map" aria-hidden="true" />

      <div className="container">
        <div className="home-services-head">
          <div>
            <p className="eyebrow">Nossos serviços</p>
            <h2>
              Vistos para
              <br />
              <em>grandes histórias.</em>
            </h2>
          </div>

          <div className="home-services-intro">
            <p>
              Assessoria especializada para turismo, estudos, negócios e muito mais, com suporte em
              todas as etapas do processo.
            </p>
            <a href={site.whatsapp}>
              Ver todos os serviços <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="home-service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function useHomeAnimations(rootRef) {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.home-hero-copy .eyebrow', { y: 16, opacity: 0, duration: 0.45 })
        .from(
          '.home-hero-copy h1 span, .home-hero-copy h1 em',
          { yPercent: 110, opacity: 0, stagger: 0.12, duration: 0.8 },
          '-=.2',
        )
        .from(
          '.home-hero-description, .home-hero-button',
          { y: 20, opacity: 0, stagger: 0.12, duration: 0.55 },
          '-=.45',
        )
        .from('.home-features > div', { y: 18, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=.25')

      gsap.to('.home-hero-bg', {
        yPercent: 9,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.from('.home-services-head > *', {
        y: 36,
        opacity: 0,
        stagger: 0.15,
        duration: 0.75,
        scrollTrigger: {
          trigger: '.home-services-head',
          start: 'top 82%',
        },
      })

      gsap.from('.home-service-card', {
        y: 55,
        opacity: 0,
        stagger: 0.13,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-service-grid',
          start: 'top 84%',
        },
      })

      gsap.from('.home-advisory-image, .home-advisory-copy', {
        y: 45,
        opacity: 0,
        stagger: 0.16,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-advisory',
          start: 'top 80%',
        },
      })
    }, rootRef)

    return () => context.revert()
  }, [rootRef])
}

export default function Home() {
  const rootRef = useRef(null)
  useHomeAnimations(rootRef)

  return (
    <>
      <div ref={rootRef} className="home-page">
        <Hero />
        <Services />
        <Advisory />
      </div>
      <FlightRoute />
    </>
  )
}
