import { useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import {
  ArrowLeft, ArrowRight, BookOpenCheck, BriefcaseBusiness, Check, CircleUserRound,
  FileCheck2, Files, FolderOpen, GraduationCap, MapPin,
  MessageCircleMore, Plane, ShieldCheck, Sparkles, Stamp, UsersRound
} from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import { site } from '../data/site'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const steps = [
  { title: 'Fale conosco', copy: 'Tire suas dúvidas com um especialista.', icon: MessageCircleMore },
  { title: 'Análise do caso', copy: 'Avaliamos o seu perfil e orientamos o melhor caminho.', icon: Files },
  { title: 'Preparação da documentação', copy: 'Cuidamos de toda a documentação com atenção e segurança.', icon: FolderOpen },
  { title: 'Visto em mãos', copy: 'Acompanhamos até o resultado final.', icon: Plane },
]

const services = [
  { title: 'Visto Americano', copy: 'Turismo, negócios, estudos e intercâmbio.', image: '/images/new-york.jpg', icon: BriefcaseBusiness },
  { title: 'Visto Canadense', copy: 'Turismo, estudos, trabalho e residência.', image: '/images/canada.jpg', icon: Sparkles },
  { title: 'Visto de Estudante', copy: 'Orientação completa para estudar no exterior.', image: '/images/europe.jpg', icon: GraduationCap },
  { title: 'Passaportes', copy: 'Solicitação e renovação com suporte especializado.', image: '/images/passport.jpg', icon: BookOpenCheck },
]

const testimonials = [
  { quote: 'Atendimento impecável, esclareceram todas as minhas dúvidas e me acompanharam em cada etapa.', name: 'Mariana Silva', service: 'Visto Americano — Turismo', image: '/images/client.jpg' },
  { quote: 'Consegui meu visto sem complicações!', name: 'Mariana Silva', service: 'Visto Americano — Turismo', image: '/images/client.jpg' },
]

function FlightPlane() {
  const id = useId()
  return <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={`${id}-wing`} x1="16" y1="34" x2="74" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff0c5" /><stop offset=".42" stopColor="#d5b476" /><stop offset=".7" stopColor="#f0d49c" /><stop offset="1" stopColor="#a67a3f" />
      </linearGradient>
      <linearGradient id={`${id}-body`} x1="42" y1="45" x2="54" y2="45" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ad8146" /><stop offset=".3" stopColor="#efd6a3" /><stop offset=".52" stopColor="#fff4d8" /><stop offset=".78" stopColor="#dfc18a" /><stop offset="1" stopColor="#a67a40" />
      </linearGradient>
      <linearGradient id={`${id}-engine`} x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="#8e683b" /><stop offset=".48" stopColor="#f6dfaf" /><stop offset="1" stopColor="#be975d" />
      </linearGradient>
    </defs>
    <g transform="rotate(45 48 48)" strokeLinejoin="round">
      <g fill={`url(#${id}-engine)`} stroke="#99733f" strokeWidth=".65">
        <rect x="27" y="44" width="6" height="17" rx="3" />
        <rect x="63" y="44" width="6" height="17" rx="3" />
      </g>
      <path d="M43 31 9 59Q7 61 8 64L43 53H53L88 64Q89 61 87 59L53 31Z" fill={`url(#${id}-wing)`} stroke="#a37b44" strokeWidth=".8" />
      <path d="M43 35 12 59M53 35 84 59" stroke="#fff0ce" strokeWidth=".85" strokeLinecap="round" opacity=".8" />
      <path d="M41 48 22 59M55 48 74 59" stroke="#8d6b3e" strokeWidth=".65" opacity=".5" />
      <path d="M44 69 32 81V86L45 82H51L64 86V81L52 69Z" fill={`url(#${id}-wing)`} stroke="#9e7741" strokeWidth=".75" />
      <path d="M48 6C43 6 42 17 42 26V63L44 79 46 89Q48 92 50 89L52 79 54 63V26C54 17 53 6 48 6Z" fill={`url(#${id}-body)`} stroke="#a17b45" strokeWidth=".75" />
      <path d="M44.5 17Q48 14 51.5 17L51 21Q48 19.3 45 21Z" fill="#243748" stroke="#f5dfb2" strokeWidth=".5" />
      <path d="M48 8V13M48 25V70" stroke="#fff8e7" strokeWidth=".8" strokeLinecap="round" opacity=".7" />
      {[28, 34, 40, 46, 52, 58].map(y => <g key={y} fill="#685c49" opacity=".7"><rect x="43.8" y={y} width="1.2" height="2.5" rx=".6" /><rect x="51" y={y} width="1.2" height="2.5" rx=".6" /></g>)}
      <path d="M48 71 46.5 85 48 89 49.5 85Z" fill="#ba9258" />
      <path d="M48 73V87" stroke="#fff0c9" strokeWidth=".65" />
      <path d="M9 59 8 64M87 59 88 64" stroke="#fff0c5" strokeWidth="1.1" strokeLinecap="round" />
    </g>
  </svg>
}

function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-map" aria-hidden="true" />
    <svg className="hero-routes" viewBox="0 0 430 650" fill="none" aria-hidden="true">
      <path d="M420 4C174-28-62 117 43 403C89 531 205 622 329 682" />
      <path d="M396 13C143-7-30 157 73 424C119 544 231 621 360 671" />
      <path className="hero-flight-path" d="M9 178C104 225 156 312 226 428C278 514 350 582 425 613" />
    </svg>
    <svg width="0" height="0" className="hero-clip" aria-hidden="true"><defs><clipPath id="hero-photo-clip" clipPathUnits="objectBoundingBox"><path d="M.13,1C.06,.78,-.065,.43,.035,.20C.10,.045,.24,-.035,.43,.025C.67,.105,.85,.115,1,0L1,1Z" /></clipPath></defs></svg>
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Assessoria de vistos consulares</p>
        <h1><span>Seu mundo,</span><span><em>sem fronteiras.</em></span></h1>
        <p className="hero-description">Cuidamos de todo o processo para você conquistar seus vistos e passaportes com segurança, praticidade e acompanhamento especializado.</p>
        <a className="gold-button hero-button" href={site.whatsapp} target="_blank" rel="noreferrer">
          <svg className="hero-whatsapp" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-4Z" /><path d="M8.1 7.5c.2-.4.5-.4.8-.4h.5l1 2.2c.1.3-.4.9-.8 1.2.7 1.5 1.9 2.7 3.5 3.3.3-.4.8-1.1 1.1-1l2.2 1c.3.1.3.5.2.9-.2 1-1.1 1.6-2.1 1.5-3.6-.4-7.3-3.9-7.5-6.9 0-.7.5-1.5 1.1-1.8Z" strokeWidth="1.3" /></svg>
          <span>Fale com um especialista</span><ArrowRight className="button-arrow" size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className="hero-visual">
      <div className="photo-ring"><img src="/images/novara-hero.png" alt="Mão segurando um passaporte brasileiro com cartão de embarque diante de Westminster, em Londres, ao pôr do sol" width="1672" height="941" fetchPriority="high" /></div>
    </div>
  </section>
}

function TrustBar() {
  const items = [[ShieldCheck, 'Atendimento', 'especializado'], [MapPin, 'Suporte em todo', 'o Brasil'], [FileCheck2, 'Processo seguro', 'e sem complicações'], [UsersRound, 'Mais de 1.000', 'clientes atendidos']]
  return <section className="trust-bar" aria-label="Diferenciais Novara"><div className="container trust-grid">{items.map(([Icon, a, b]) => <div className="trust-item" key={a}><Icon /><p>{a}<br /><span>{b}</span></p></div>)}</div></section>
}

function Journey() {
  return <section id="sobre" className="section ivory journey"><div className="container">
    <SectionTitle eyebrow="Como funciona" title="Sua jornada começa aqui." copy="Do primeiro contato ao seu visto em mãos, nós cuidamos de cada detalhe." />
    <div className="steps">{steps.map((step, i) => { const Icon = step.icon; return <article className="step" key={step.title}><div className="step-top"><span>0{i + 1}</span><Icon /><i /></div><h3>{step.title}</h3><p>{step.copy}</p></article> })}</div>
  </div></section>
}

function Services() {
  return <section id="servicos" className="section services ivory"><div className="container">
    <div className="services-head"><SectionTitle eyebrow="Nossos serviços" title="Assessoria para cada destino." /><p>Vistos, passaportes e documentação internacional com suporte especializado em todas as etapas.</p></div>
    <div className="service-grid">{services.map(service => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-image"><img src={service.image} alt="" loading="lazy" /><span><Icon /></span></div><h3>{service.title}</h3><div className="card-copy"><p>{service.copy}</p><a href={site.whatsapp} aria-label={`Saiba mais sobre ${service.title}`}><ArrowRight /></a></div></article> })}</div>
  </div></section>
}

function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]
  return <section id="depoimentos" className="section testimonials"><div className="stamp-bg" aria-hidden="true">ARRIVAL<br />VISA</div><div className="container testimonial-grid">
    <div><p className="eyebrow">Depoimentos</p><h2>Histórias reais<br />de novos destinos.</h2><div className="carousel-buttons"><button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} aria-label="Depoimento anterior"><ArrowLeft /></button><button onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Próximo depoimento"><ArrowRight /></button></div></div>
    <div className="quote" key={index}><b>“</b><blockquote>{current.quote}</blockquote><div className="client"><img src={current.image} alt="" /><p><strong>{current.name}</strong><span>{current.service}</span><i aria-label="5 estrelas">★★★★★</i></p></div></div>
  </div></section>
}

function Why() {
  const items = [[Stamp, 'Experiência', 'com foco em resultados'], [CircleUserRound, 'Atendimento', 'personalizado'], [ShieldCheck, 'Transparência', 'em todas as etapas'], [MapPin, 'Suporte em', 'todo o Brasil']]
  return <section className="section ivory why"><div className="container why-grid"><SectionTitle eyebrow="Por que escolher a Novara" title="Mais que uma assessoria, uma parceria na sua jornada." /><div className="why-items">{items.map(([Icon, title, copy]) => <div key={title}><Icon /><p><strong>{title}</strong><span>{copy}</span></p></div>)}</div></div></section>
}

function Pricing() {
  const benefits = ['Preenchimento de formulários', 'Agendamento da entrevista', 'Orientação para a entrevista', 'Acompanhamento até o resultado']
  return <section className="section pricing"><div className="container"><div className="pricing-head"><SectionTitle light eyebrow="Assessoria completa" title="Planos de Assessoria" /><p>Escolha o destino e conte com nosso suporte especializado do início ao fim do processo.</p></div><div className="pricing-grid">{site.plans.map(plan => <article className="price-card" key={plan.country}><img src={plan.image} alt="" loading="lazy" /><div className="plan-info"><h3><span>{plan.flag}</span>{plan.country}</h3><small>Assessoria completa</small><ul>{benefits.map(item => <li key={item}><Check />{item}</li>)}</ul></div><div className="plan-price"><small>A partir de</small><strong>{plan.price}</strong><span>em até 6x sem juros</span><a href={site.whatsapp}>Quero meu visto <ArrowRight /></a></div></article>)}</div></div></section>
}

export default function Home() {
  const root = useRef(null)
  const flight = useRef(null)
  const routeSvg = useRef(null)
  const routePath = useRef(null)
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(window.location.search).has('reduced')) return
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from(document.querySelector('.header'), { y: -20, opacity: 0, duration: .7 })
        .from('.hero-copy .eyebrow', { y: 16, opacity: 0, duration: .5 }, '-=.3')
        .from('.hero h1 span', { yPercent: 115, opacity: 0, duration: .85, stagger: .12 }, '-=.25')
        .from('.hero-description, .hero-copy .gold-button', { y: 18, opacity: 0, duration: .6, stagger: .12 }, '-=.45')
        .from('.photo-ring', { x: 45, scale: .94, opacity: 0, duration: 1.15 }, '-=1')
      gsap.utils.toArray('.reveal-heading').forEach(el => gsap.from(el.children, { scrollTrigger: { trigger: el, start: 'top 84%' }, y: 35, opacity: 0, duration: .75, stagger: .1 }))
      gsap.from('.step', { scrollTrigger: { trigger: '.steps', start: 'top 80%' }, y: 35, opacity: 0, stagger: .14, duration: .7 })
      gsap.from('.service-card', { scrollTrigger: { trigger: '.service-grid', start: 'top 82%' }, y: 45, opacity: 0, stagger: .12, duration: .75 })
      gsap.from('.price-card', { scrollTrigger: { trigger: '.pricing-grid', start: 'top 82%' }, x: (i) => i ? 40 : -40, opacity: 0, stagger: .15, duration: .85 })
    }, root)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const motion = gsap.matchMedia()
    motion.add({ reduced: '(prefers-reduced-motion: reduce)', full: '(prefers-reduced-motion: no-preference)' }, (context) => {
      const plane = flight.current
      const svg = routeSvg.current
      const path = routePath.current
      const brand = document.querySelector('.header .brand')
      const header = document.querySelector('.header-inner')
      const footer = document.querySelector('.footer')
      const destination = document.querySelector('[data-flight-destination]')
      if (!brand || !header || !footer || !destination) return

      const reduced = context.conditions.reduced || new URLSearchParams(window.location.search).has('reduced')
      const geometry = {}
      let journey
      let disposed = false
      let refreshFrame

      const measure = () => {
        const width = document.documentElement.clientWidth
        const height = window.innerHeight
        const size = plane.offsetWidth
        const origin = brand.getBoundingClientRect()
        const target = destination.getBoundingClientRect()
        const pageHeight = Math.max(height, footer.getBoundingClientRect().bottom + window.scrollY)
        const startX = Math.min(origin.right + size * .65, width - size / 2 - 12)
        const startY = header.offsetHeight / 2
        const endX = target.left + target.width / 2
        const endY = target.top + window.scrollY + target.height / 2
        const right = width - Math.max(size * .25 + 4, Math.min(60, width * .04))
        const sway = Math.min(38, Math.max(3, (width - 680) * .05))
        const cruiseY = Math.min(height * .36, endY * .2)
        const span = endY - cruiseY
        const d = `M${startX},${startY}
          C${startX + 55},${startY} ${width * .6},${startY + 45} ${right},${cruiseY}
          C${right - sway},${cruiseY + span * .15} ${right},${cruiseY + span * .22} ${right - sway * .2},${cruiseY + span * .34}
          S${right - sway * .8},${cruiseY + span * .53} ${right},${cruiseY + span * .68}
          C${right},${cruiseY + span * .8} ${right - sway * .25},${endY - 170} ${endX - 70},${endY - 60}
          C${endX - 48},${endY - 22} ${endX - 26},${endY} ${endX},${endY}`
        svg.setAttribute('viewBox', `0 0 ${width} ${pageHeight}`)
        svg.setAttribute('height', pageHeight)
        path.setAttribute('d', d)
        geometry.length = path.getTotalLength()
        geometry.maxScroll = Math.max(1, pageHeight - height)
        geometry.startX = startX
        geometry.startY = startY
        geometry.landingY = endY - geometry.maxScroll
        const rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(path), 48)
        geometry.samples = Array.from({ length: 501 }, (_, i) => MotionPathPlugin.getPositionOnPath(rawPath, i / 500).y)
        if (reduced || !journey || journey.progress() === 0) {
          gsap.set(plane, { x: startX, y: startY, rotation: reduced ? 20 : 45, scale: reduced ? .75 : 1 })
        }
      }

      measure()
      gsap.set(svg, { autoAlpha: reduced ? 0 : 1 })
      gsap.set(plane, { autoAlpha: 1, xPercent: -50, yPercent: -50, transformOrigin: '50% 50%' })
      if (!reduced) {
        // Mantem o aviao no viewport, mesmo quando a curva tem trechos mais horizontais.
        const pathProgress = (progress) => {
          if (progress <= 0) return 0
          if (progress >= 1) return 1
          const screenY = (p) => geometry.startY + (geometry.landingY - geometry.startY) * (1 - Math.cos(Math.PI * p)) / 2
          let targetY = geometry.maxScroll * progress + screenY(progress)
          if (progress < .15) targetY -= 24 * Math.sin(Math.PI * progress / .15)
          if (progress > .98) {
            const approach = geometry.maxScroll * .98 + screenY(.98)
            const end = geometry.maxScroll + geometry.landingY
            targetY = end - (end - approach) * ((1 - progress) / .02) ** 3
          }
          const samples = geometry.samples
          let low = 0
          let high = samples.length - 1
          while (high - low > 1) {
            const middle = (low + high) >> 1
            if (samples[middle] < targetY) low = middle
            else high = middle
          }
          const fraction = (targetY - samples[low]) / (samples[high] - samples[low] || 1)
          return (low + Math.max(0, Math.min(1, fraction))) / (samples.length - 1)
        }
        journey = gsap.timeline({
          scrollTrigger: {
            id: 'novara-flight',
            start: 0,
            end: () => geometry.maxScroll,
            scrub: .7,
            invalidateOnRefresh: true,
            onRefreshInit: measure,
          },
          defaults: { ease: 'none' },
        })
        journey
          .to(plane, { duration: 1, ease: pathProgress, motionPath: () => ({ path, autoRotate: 45, resolution: 48 }) }, 0)
          .fromTo(path, { strokeDasharray: () => geometry.length, strokeDashoffset: () => geometry.length }, { strokeDashoffset: 0, autoRound: false, duration: 1, ease: pathProgress }, 0)
          .fromTo(plane, { scale: 1 }, { scale: () => window.innerWidth <= 680 ? .45 : .62, duration: .05, ease: 'power1.out' }, 0)
          .to(plane, { scale: () => window.innerWidth <= 680 ? .4 : .48, duration: .02, ease: 'power2.out' }, .98)
          .fromTo(destination, { '--arrival-glow': 0 }, { '--arrival-glow': 1, duration: .02 }, .98)
      }

      // Recalcula o percurso quando fontes, imagens ou o layout mudam de tamanho.
      const refresh = () => {
        cancelAnimationFrame(refreshFrame)
        refreshFrame = requestAnimationFrame(() => {
          if (journey) ScrollTrigger.refresh()
          else measure()
        })
      }
      const observer = new ResizeObserver(refresh)
      observer.observe(root.current)
      observer.observe(footer)
      observer.observe(brand)
      document.fonts.ready.then(() => { if (!disposed) refresh() })
      return () => {
        disposed = true
        cancelAnimationFrame(refreshFrame)
        observer.disconnect()
      }
    }, root)
    return () => motion.revert()
  }, [])

  return <><div ref={root}><Hero /><TrustBar /><Journey /><Services /><Testimonials /><Why /><Pricing /></div>{createPortal(<div className="flight-journey" aria-hidden="true"><svg ref={routeSvg} className="flight-route" preserveAspectRatio="none" fill="none"><path ref={routePath} /></svg><div ref={flight} className="plane-flight"><FlightPlane /></div></div>, document.body)}</>
}
