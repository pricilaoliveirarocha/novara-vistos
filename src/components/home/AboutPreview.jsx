import { ArrowRight, CheckCircle2, PlaneTakeoff } from 'lucide-react'

const highlights = ['Atendimento humano', 'Orientação especializada', 'Suporte do início ao fim']

export default function AboutPreview() {
  return (
    <section id="sobre" className="home-about" aria-labelledby="home-about-title">
      <div className="container home-about-grid">
        <div className="home-about-copy">
          <p className="eyebrow">Sobre a Novara</p>
          <h2 id="home-about-title">
            Mais que vistos,
            <br />
            <em>conectamos histórias.</em>
          </h2>
          <p>
            Somos uma assessoria consular especializada em vistos, passaportes e autorizações
            internacionais. Traduzimos processos complexos em uma jornada clara, segura e
            personalizada.
          </p>

          <div className="home-about-points">
            {highlights.map((highlight) => (
              <span key={highlight}>
                <CheckCircle2 aria-hidden="true" /> {highlight}
              </span>
            ))}
          </div>

          <a className="home-text-link" href="#depoimentos">
            Veja o que dizem nossos clientes <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="home-about-visual">
          <img
            src="/images/about-london.png"
            alt="Viajante observando Londres enquanto planeja uma viagem internacional"
            loading="lazy"
          />
          <div className="home-about-seal" aria-hidden="true">
            <PlaneTakeoff />
            <span>Novos destinos</span>
          </div>
          <div className="home-about-stat">
            <strong>100%</strong>
            <span>acompanhamento personalizado</span>
          </div>
        </div>
      </div>
    </section>
  )
}
