import { useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Globe2, Landmark, MapPinned, ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import { site } from '../data/site'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const services = [
  { title: 'Visto Americano', copy: 'Turismo, negócios, estudos e intercâmbio.', image: '/images/service-usa.png', icon: Landmark },
  { title: 'Visto Canadense', copy: 'Turismo, estudos, trabalho e residência.', image: '/images/service-canada.png', icon: Sparkles },
  { title: 'Visto para Europa', copy: 'Turismo, estudos e negócios.', image: '/images/service-europe.png', icon: Globe2 },
  { title: 'Outros destinos', copy: 'Diversos países com suporte especializado.', image: '/images/service-destinations.png', icon: MapPinned },
]

function FlightPlane() {
  return <svg viewBox="0 0 96 96" aria-hidden="true">
    <defs>
      <linearGradient id="plane-premium-gold" x1="18" y1="12" x2="76" y2="88" gradientUnits="userSpaceOnUse"><stop stopColor="#fff0c7" /><stop offset=".32" stopColor="#d69b3e" /><stop offset=".58" stopColor="#f4d28d" /><stop offset="1" stopColor="#a96820" /></linearGradient>
      <linearGradient id="plane-premium-wing" x1="7" y1="43" x2="89" y2="57" gradientUnits="userSpaceOnUse"><stop stopColor="#b97929" /><stop offset=".48" stopColor="#f5d38d" /><stop offset="1" stopColor="#b97929" /></linearGradient>
    </defs>
    <path className="plane-wings" d="M43 53 7 42c-3 2-3 5 0 7l35 17h12l35-17c3-2 3-5 0-7L53 53Z" />
    <path className="plane-tail" d="m42 22-12-9V8l18 5 18-5v5l-12 9Z" />
    <path className="plane-body" d="M48 93c-4 0-6-11-6-27V27c0-13 2-24 6-24s6 11 6 24v39c0 16-2 27-6 27Z" />
    <path className="plane-cabin" d="M44.8 19Q48 15 51.2 19l-.7 5Q48 22 45.5 24Z" />
    <path className="plane-detail" d="M48 30v48M17 47l25 10M79 47 54 57M36 15l6 4M60 15l-6 4" />
  </svg>
}

function Hero() {
  const features = [[ShieldCheck, 'Processo seguro', 'e sem complicações'], [UsersRound, 'Atendimento', 'personalizado'], [Globe2, 'Em todo', 'o Brasil']]
  return <section id="inicio" className="home-hero">
    <div className="home-hero-bg" aria-hidden="true" /><div className="home-hero-shade" aria-hidden="true" />
    <div className="container home-hero-inner"><div className="home-hero-copy">
      <p className="eyebrow">Assessoria de vistos consulares</p>
      <h1><span>Seu mundo,</span><em>sem fronteiras.</em></h1>
      <p className="home-hero-description">Cuidamos de todo o processo para você conquistar seus vistos e viajar com tranquilidade.</p>
      <a className="gold-button home-hero-button" href={site.whatsapp} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8a8.5 8.5 0 1 1 16.2-4Z" /><path d="M8.1 7.5c.2-.4.5-.4.8-.4h.5l1 2.2c.1.3-.4.9-.8 1.2.7 1.5 1.9 2.7 3.5 3.3.3-.4.8-1.1 1.1-1l2.2 1c.3.1.3.5.2.9-.2 1-1.1 1.6-2.1 1.5-3.6-.4-7.3-3.9-7.5-6.9 0-.7.5-1.5 1.1-1.8Z" strokeWidth="1.3" /></svg>
        <span>Fale com um especialista</span><ArrowRight className="button-arrow" />
      </a>
      <div className="home-features">{features.map(([Icon, line1, line2]) => <div key={line1}><span><Icon /></span><p>{line1}<br />{line2}</p></div>)}</div>
    </div></div>
  </section>
}

function Services() {
  return <section id="servicos" className="home-services"><div className="home-services-map" aria-hidden="true" /><div className="container">
    <div className="home-services-head">
      <div><p className="eyebrow">Nossos serviços</p><h2>Vistos para<br /><em>grandes histórias.</em></h2></div>
      <div className="home-services-intro"><p>Assessoria especializada para turismo, estudos, negócios e muito mais, com suporte em todas as etapas do processo.</p><a href={site.whatsapp}>Ver todos os serviços <ArrowRight /></a></div>
    </div>
    <div className="home-service-grid">{services.map(({ title, copy, image, icon: Icon }) => <article className="home-service-card" key={title}>
      <div className="home-service-image"><img src={image} alt="" loading="lazy" /><span><Icon /></span></div>
      <div className="home-service-body"><h3>{title}</h3><div><p>{copy}</p><a href={site.whatsapp} aria-label={`Saiba mais sobre ${title}`}><ArrowRight /></a></div></div>
    </article>)}</div>
  </div></section>
}

export default function Home() {
  const root = useRef(null)
  const plane = useRef(null)
  const route = useRef(null)
  const routeGlow = useRef(null)
  const routeSvg = useRef(null)
  const routeDots = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.header', { y: -24, opacity: 0, duration: .7 })
          .from('.home-hero-copy .eyebrow', { y: 16, opacity: 0, duration: .45 }, '-=.25')
          .from('.home-hero-copy h1 span, .home-hero-copy h1 em', { yPercent: 110, opacity: 0, stagger: .12, duration: .8 }, '-=.2')
          .from('.home-hero-description, .home-hero-button', { y: 20, opacity: 0, stagger: .12, duration: .55 }, '-=.45')
          .from('.home-features > div', { y: 18, opacity: 0, stagger: .1, duration: .5 }, '-=.25')
        gsap.to('.home-hero-bg', { yPercent: 9, scale: 1.04, ease: 'none', scrollTrigger: { trigger: '.home-hero', start: 'top top', end: 'bottom top', scrub: true } })
        gsap.from('.home-services-head > *', { y: 36, opacity: 0, stagger: .15, duration: .75, scrollTrigger: { trigger: '.home-services-head', start: 'top 82%' } })
        gsap.from('.home-service-card', { y: 55, opacity: 0, stagger: .13, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.home-service-grid', start: 'top 84%' } })
      }
    }, root)
    const footerReveal = reduced ? null : gsap.from('.home-page-main + .footer .cta-panel', { x: -45, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: '.home-page-main + .footer .contact-cta', start: 'top 76%' } })
    return () => { ctx.revert(); footerReveal?.scrollTrigger?.kill(); footerReveal?.kill() }
  }, [])

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const path = route.current
    const glow = routeGlow.current
    const svg = routeSvg.current
    const flyer = plane.current
    const dots = [...routeDots.current.children]
    const destination = document.querySelector('[data-flight-destination]')
    if (!path || !glow || !svg || !flyer || !destination) return
    let timeline
    const measure = () => {
      const width = document.documentElement.clientWidth
      const pageHeight = document.documentElement.scrollHeight
      const target = destination.getBoundingClientRect()
      const endX = target.left + target.width / 2
      const endY = target.top + window.scrollY + target.height / 2
      const startX = Math.min(width * .36, 520)
      const startY = 74
      const midX = width < 760 ? width * .78 : width * .53
      const d = `M${startX},${startY} C${startX},${startY + 175} ${midX},${endY * .22} ${width * .49},${endY * .37} S${width * .34},${endY * .56} ${width * .52},${endY * .69} S${width * .68},${endY * .83} ${endX},${endY}`
      svg.setAttribute('viewBox', `0 0 ${width} ${pageHeight}`)
      svg.setAttribute('height', pageHeight)
      path.setAttribute('d', d)
      glow.setAttribute('d', d)
      const length = path.getTotalLength()
      dots.forEach((dot, index) => { const point = path.getPointAtLength(length * ((index + 1) / (dots.length + 1))); dot.setAttribute('cx', point.x); dot.setAttribute('cy', point.y) })
      if (!timeline || timeline.progress() === 0) gsap.set(flyer, { x: startX, y: startY })
    }
    measure()
    gsap.set(flyer, { xPercent: -50, yPercent: -50, autoAlpha: 1 })
    if (!reduced) {
      timeline = gsap.timeline({ scrollTrigger: { id: 'home-flight', start: 0, end: () => Math.max(1, document.documentElement.scrollHeight - innerHeight), scrub: .85, invalidateOnRefresh: true, onRefreshInit: measure } })
      timeline.to(flyer, { ease: 'none', motionPath: { path, autoRotate: -90, alignOrigin: [.5, .5] } }, 0)
      gsap.to(glow, { strokeDashoffset: -36, repeat: -1, duration: 2.2, ease: 'none' })
    } else gsap.set(flyer, { opacity: 0 })
    const onResize = () => { measure(); ScrollTrigger.refresh() }
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize); timeline?.scrollTrigger?.kill(); timeline?.kill(); ScrollTrigger.getById('home-flight')?.kill() }
  }, [])

  return <><div ref={root} className="home-page"><Hero /><Services /></div>{createPortal(<div className="home-flight-layer" aria-hidden="true">
    <svg ref={routeSvg} className="home-flight-route" preserveAspectRatio="none"><path ref={route} className="route-base" /><path ref={routeGlow} className="route-glow" /><g ref={routeDots}>{Array.from({ length: 9 }, (_, index) => <circle key={index} r={index % 3 === 0 ? 5 : 3} />)}</g></svg>
    <div ref={plane} className="home-flight-plane"><span className="plane-smoke"><i /><i /><i /></span><FlightPlane /></div>
  </div>, document.body)}</>
}
