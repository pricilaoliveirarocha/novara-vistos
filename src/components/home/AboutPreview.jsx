import { ArrowRight, CheckCircle2, Play, UsersRound } from 'lucide-react'

const highlights = ['Atendimento global', 'Experiência e confiança', 'Suporte em todas as etapas']

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
            Acreditamos que cada destino representa uma nova oportunidade de vida. Por isso,
            oferecemos soluções personalizadas e um atendimento próximo, do início ao fim do seu
            processo.
          </p>

          <div className="home-about-points">
            {highlights.map((highlight) => (
              <span key={highlight}>
                <CheckCircle2 aria-hidden="true" /> {highlight}
              </span>
            ))}
          </div>

          <a className="home-text-link" href="/sobre">
            Conheça mais a Novara <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="home-about-visual">
          <img
            src="/images/service-europe.png"
            alt="Big Ben e o Palácio de Westminster em Londres ao pôr do sol"
            loading="lazy"
          />
          <a className="home-about-discover" href="/sobre">
            <span>
              <Play aria-hidden="true" />
            </span>
            <span>
              CONHEÇA A NOVARA
              <br />
              NOSSA HISTÓRIA
            </span>
          </a>
          <div className="home-about-stat">
            <UsersRound aria-hidden="true" />
            <strong>100%</strong>
            <span>comprometidos com o seu futuro</span>
          </div>
        </div>
      </div>
    </section>
  )
}
