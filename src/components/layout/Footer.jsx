import { MapPin } from 'lucide-react'
import { getNavigation, isNavigationItemActive, normalizePath, site } from '../../data/site'
import Brand from '../ui/Brand'
import GoldButton from '../ui/GoldButton'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ContactCallout({ isHomePage }) {
  return (
    <section id="contato" className="contact-cta" aria-labelledby="footer-contact-title">
      <div className="container contact-cta-inner">
        <div className="cta-panel">
          <p className="eyebrow">
            {isHomePage ? 'Planeje sua próxima viagem' : 'Pronto para o seu próximo destino?'}
          </p>

          <h2 id="footer-contact-title">
            {isHomePage ? (
              <>
                Do seu planejamento
                <br />
                ao seu próximo <em>destino.</em>
              </>
            ) : (
              'Fale com um especialista.'
            )}
          </h2>

          <p>
            Tire suas dúvidas e receba uma orientação personalizada
            <br className="desktop-break" /> para o seu caso.
          </p>

          <GoldButton href={site.whatsapp}>
            {isHomePage ? 'Fale com um especialista' : 'Atendimento pelo WhatsApp'}
          </GoldButton>
        </div>

        {isHomePage && (
          <div className="home-destination" data-flight-destination aria-hidden="true">
            <MapPin />
            <span />
            <i />
          </div>
        )}
      </div>
    </section>
  )
}

export default function Footer() {
  const currentPath = window.location.pathname
  const isHomePage = normalizePath(currentPath) === '/'
  const navItems = getNavigation(currentPath)

  return (
    <footer className="footer">
      <ContactCallout isHomePage={isHomePage} />

      <div className="container footer-top">
        <Brand />

        <div className="footer-center">
          <nav aria-label="Navegação do rodapé">
            {navItems.map(({ href, label }) => (
              <a
                className={isNavigationItemActive(href, currentPath) ? 'active' : ''}
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </nav>
          <p>
            Seu mundo, <em>sem fronteiras.</em>
          </p>
        </div>

        <div className="footer-arrival">
          <div className="socials" aria-label="Redes sociais">
            <a href="#instagram" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Novara Vistos. Todos os direitos reservados.</span>
        <span>
          <a href="#privacidade">Política de Privacidade</a>
          <i />
          <a href="#termos">Termos de Uso</a>
        </span>
      </div>
    </footer>
  )
}
