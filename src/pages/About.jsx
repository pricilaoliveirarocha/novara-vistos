import { Award, Globe2, Plane, ShieldCheck, UsersRound } from 'lucide-react'

const values = [
  {
    icon: UsersRound,
    title: (
      <>
        Atendimento
        <br />
        personalizado
      </>
    ),
    copy: 'Entendemos sua necessidade e indicamos o melhor caminho.',
  },
  {
    icon: ShieldCheck,
    title: (
      <>
        Segurança
        <br />
        no processo
      </>
    ),
    copy: 'Orientação clara e suporte especializado em todas as etapas.',
  },
  {
    icon: Globe2,
    title: (
      <>
        Suporte do início
        <br />
        ao fim
      </>
    ),
    copy: 'Acompanhamos você até o resultado final, com praticidade e tranquilidade.',
  },
  {
    icon: Award,
    title: (
      <>
        Compromisso
        <br />
        com o seu destino
      </>
    ),
    copy: 'Buscamos sempre o melhor resultado, com seriedade, responsabilidade e atenção aos detalhes.',
  },
]

const team = [
  {
    name: 'Wander Karasek',
    role: 'CEO & Consultor',
    person: 'wander',
    copy: 'Especialista em processos consulares e com ampla experiência em assessoria internacional, lidera a Novara Vistos com foco em resultados e na satisfação dos clientes.',
  },
  {
    name: 'Pricila Oliveira',
    role: 'Atendimento ao cliente & Suporte',
    person: 'pricila',
    copy: 'Responsável pelo atendimento personalizado, acompanha cada etapa do processo, garantindo clareza, organização e suporte contínuo aos nossos clientes.',
  },
]

function StorySection() {
  return (
    <section className="about-story">
      <div className="about-map" aria-hidden="true" />

      <div className="container">
        <div className="about-intro">
          <div className="about-copy">
            <p className="eyebrow">Quem somos</p>
            <h1>
              Mais que vistos,
              <br />
              <em>conectamos histórias.</em>
            </h1>
            <p>
              A Novara Vistos é uma assessoria consular especializada em vistos, passaportes e
              autorizações internacionais. Simplificamos processos e oferecemos orientação
              personalizada em cada etapa, para que você viaje com tranquilidade e segurança.
            </p>
          </div>

          <div className="about-photo-wrap">
            <img
              src="/images/about-london.png"
              alt="Viajante observando o Big Ben em Londres ao pôr do sol"
              width="1536"
              height="1024"
            />
            <span className="passport-stamp" aria-hidden="true">
              <Plane />
            </span>
          </div>
        </div>

        <div className="about-values">
          {values.map(({ icon: Icon, title, copy }) => (
            <article key={copy}>
              <Icon aria-hidden="true" />
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  return (
    <section className="about-team">
      <div className="container">
        <div className="team-heading">
          <div>
            <p className="eyebrow">Nossa equipe</p>
            <h2>
              Experiência
              <br />
              <em>ao seu lado.</em>
            </h2>
          </div>
          <p>
            Contamos com uma equipe dedicada e experiente, pronta para oferecer o suporte que você
            precisa em cada etapa do seu processo, com atendimento humanizado e foco no seu
            objetivo.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" data-person={member.person} key={member.name}>
              <div className="team-photo">
                <img
                  src="/images/about-team.png"
                  alt={`Retrato de ${member.name}`}
                  width="1792"
                  height="896"
                />
              </div>
              <div className="team-card-copy">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <i />
                <p>{member.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero" aria-label="Passaporte brasileiro em um aeroporto">
        <img
          src="/images/about-hero.png"
          alt="Passaporte brasileiro e avião em miniatura sobre uma mala diante da pista de um aeroporto ao pôr do sol"
          width="2172"
          height="724"
          fetchPriority="high"
        />
      </section>

      <StorySection />
      <TeamSection />
    </div>
  )
}
