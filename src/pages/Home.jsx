import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowLeft, ArrowRight, BookOpenCheck, BriefcaseBusiness, Check, CircleUserRound,
  FileCheck2, Files, FolderOpen, GraduationCap, MapPin,
  MessageCircleMore, Plane, ShieldCheck, Sparkles, Stamp, UsersRound
} from 'lucide-react'
import GoldButton from '../components/ui/GoldButton'
import SectionTitle from '../components/ui/SectionTitle'
import { site } from '../data/site'

gsap.registerPlugin(ScrollTrigger)

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

function Hero() {
  return <section id="inicio" className="hero">
    <div className="hero-map" aria-hidden="true" />
    <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Assessoria de vistos consulares</p>
        <h1><span>Seu mundo,</span><span><em>sem fronteiras.</em></span></h1>
        <p className="hero-description">Cuidamos de todo o processo para você conquistar seus vistos e passaportes com segurança, praticidade e acompanhamento especializado.</p>
        <GoldButton href={site.whatsapp}>Fale com um especialista</GoldButton>
        <div className="social-proof">
          <div className="avatar-stack"><img src="/images/client.jpg" alt="Cliente Novara" /><img src="/images/client-2.jpg" alt="" /><img src="/images/client-3.jpg" alt="" /><img src="/images/client-4.jpg" alt="" /></div>
          <p><b>+ de 1.000 clientes atendidos</b><span>em todo o Brasil</span></p>
        </div>
      </div>
      <div className="hero-visual">
        <div className="photo-ring"><img src="/images/novara-hero.png" alt="Passaporte brasileiro diante de Westminster, em Londres" fetchPriority="high" /></div>
        <Plane className="floating-plane" aria-hidden="true" />
        <p className="hand-note">Novos destinos.<br />Grandes histórias.</p>
      </div>
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
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(window.location.search).has('reduced')) return
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro.from(document.querySelector('.header'), { y: -20, opacity: 0, duration: .7 })
        .from('.hero-copy .eyebrow', { y: 16, opacity: 0, duration: .5 }, '-=.3')
        .from('.hero h1 span', { yPercent: 115, opacity: 0, duration: .85, stagger: .12 }, '-=.25')
        .from('.hero-description, .hero-copy .gold-button', { y: 18, opacity: 0, duration: .6, stagger: .12 }, '-=.45')
        .from('.photo-ring', { x: 45, scale: .94, opacity: 0, duration: 1.15 }, '-=1')
        .from('.social-proof img', { scale: 0, opacity: 0, stagger: .08, duration: .35 }, '-=.45')
      gsap.to('.floating-plane', { x: 12, y: -7, rotation: -7, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.utils.toArray('.reveal-heading').forEach(el => gsap.from(el.children, { scrollTrigger: { trigger: el, start: 'top 84%' }, y: 35, opacity: 0, duration: .75, stagger: .1 }))
      gsap.from('.step', { scrollTrigger: { trigger: '.steps', start: 'top 80%' }, y: 35, opacity: 0, stagger: .14, duration: .7 })
      gsap.from('.service-card', { scrollTrigger: { trigger: '.service-grid', start: 'top 82%' }, y: 45, opacity: 0, stagger: .12, duration: .75 })
      gsap.from('.price-card', { scrollTrigger: { trigger: '.pricing-grid', start: 'top 82%' }, x: (i) => i ? 40 : -40, opacity: 0, stagger: .15, duration: .85 })
    }, root)
    return () => ctx.revert()
  }, [])
  return <div ref={root}><Hero /><TrustBar /><Journey /><Services /><Testimonials /><Why /><Pricing /></div>
}
