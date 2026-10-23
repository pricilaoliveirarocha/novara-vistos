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
import AboutPreview from '../components/home/AboutPreview'
import FlightRoute from '../components/home/FlightRoute'
import Testimonials from '../components/home/Testimonials'
import GoldButton from '../components/ui/GoldButton'
import { site } from '../data/site'

gsap.registerPlugin(ScrollTrigger)

const heroFeatures = [
  { icon: ShieldCheck, title: 'Processo seguro', detail: 'e descomplicado' },
  { icon: UsersRound, title: 'Atendimento', detail: 'personalizado' },
  { icon: Globe2, title: 'Mais de', detail: '50 países' },
]

const services = [
  {
    title: 'Visto Americano',
    description: 'Turismo, negócios, estudos e intercâmbio.',
    image: '/images/service-usa.png',
    icon: Landmark,
    category: 'Vistos para',
  },
  {
    title: 'Visto Canadense',
    description: 'Turismo, estudos, trabalho e residência.',
    image: '/images/service-canada.png',
    icon: Sparkles,
    category: 'Vistos para',
  },
  {
    title: 'Visto para Europa',
    description: 'Turismo, estudos e negócios.',
    image: '/images/service-europe.png',
    icon: Globe2,
    category: 'Vistos para',
  },
  {
    title: 'Personalizada',
    description: 'Planejamento completo para o seu destino.',
    image: '/images/airport-front.png',
    icon: FileCheck2,
    category: 'Consultoria',
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
    title: 'Estratégia personalizada',
    copy: 'Orientamos o melhor caminho para o seu objetivo de viagem.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Acompanhamento em tempo real',
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
          <p className="eyebrow">Liberdade de ir mais longe</p>
          <h1>
            <span>Seu mundo,</span>
            <em>sem fronteiras.</em>
          </h1>
          <p className="home-hero-description">
            Soluções de vistos e imigração para você conquistar o que o mundo tem de melhor, com
            segurança, experiência e atendimento personalizado.
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
            src="/images/airport-front.png"
            alt="Avião no aeroporto ao pôr do sol"
            loading="lazy"
          />
          <span>
            <FileCheck2 aria-hidden="true" />
            Planejamento completo para
            <br /> sua viagem ao mundo.
          </span>
        </div>

        <div className="home-advisory-copy">
          <p className="eyebrow">Assistência completa</p>
          <h2 id="advisory-title">
            Sua viagem começa
            <br />
            <em>antes do embarque.</em>
          </h2>
          <p className="home-advisory-intro">
            Do planejamento à emissão do visto, cuidamos de cada detalhe para uma experiência
            tranquila e sem imprevistos.
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
              Soluções completas para quem estuda, trabalha, faz negócios ou reúne sua família em
              qualquer destino do mundo.
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

      gsap.from('.home-about-copy > *, .home-about-visual', {
        y: 42,
        opacity: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.home-about',
          start: 'top 78%',
        },
      })

      gsap.from('.google-review-card', {
        y: 48,
        opacity: 0,
        rotateX: 6,
        stagger: 0.12,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.google-review-grid',
          start: 'top 84%',
        },
      })

      gsap.from('.google-review-rating svg', {
        scale: 0,
        rotate: -30,
        stagger: 0.025,
        duration: 0.35,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.google-review-grid',
          start: 'top 82%',
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
        <AboutPreview />
        <Advisory />
        <Testimonials />
      </div>
      <FlightRoute />
    </>
  )
}
