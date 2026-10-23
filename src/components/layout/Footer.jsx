import Brand from '../ui/Brand'
import GoldButton from '../ui/GoldButton'
import { MapPin } from 'lucide-react'
import { site } from '../../data/site'

function SocialIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
}

export default function Footer() {
  const isHome = (window.location.pathname.replace(/\/$/, '') || '/') === '/'
  const navItems = isHome ? site.nav.filter(item => item.label !== 'Serviços') : site.nav
  return <footer className="footer">
    <section id="contato" className="contact-cta" aria-labelledby="footer-contact-title">
      <div className="container contact-cta-inner">
        <div className="cta-panel">
          <p className="eyebrow">{isHome ? 'Planeje sua próxima viagem' : 'Pronto para o seu próximo destino?'}</p>
          <h2 id="footer-contact-title">{isHome ? <>Do seu planejamento<br />ao seu próximo <em>destino.</em></> : 'Fale com um especialista.'}</h2>
          <p>Tire suas dúvidas e receba uma orientação personalizada<br className="desktop-break" /> para o seu caso.</p>
          <GoldButton href={site.whatsapp}>{isHome ? 'Fale com um especialista' : 'Atendimento pelo WhatsApp'}</GoldButton>
        </div>
        {isHome && <div className="home-destination" data-flight-destination aria-hidden="true"><MapPin /><span /><i /></div>}
      </div>
    </section>
    <div className="container footer-top">
      <Brand />
      <div className="footer-center">
        <nav aria-label="Navegação do rodapé">{navItems.map(item => <a className={(isHome && item.href === '/') || (item.href === '/sobre' && window.location.pathname.startsWith('/sobre')) ? 'active' : ''} key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <p>Seu mundo, <em>sem fronteiras.</em></p>
      </div>
      <div className="footer-arrival">
        <div className="socials" aria-label="Redes sociais"><a href="#instagram" aria-label="Instagram"><SocialIcon /></a></div>
      </div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Novara Vistos. Todos os direitos reservados.</span><span><a href="#privacidade">Política de Privacidade</a><i /> <a href="#termos">Termos de Uso</a></span></div>
  </footer>
}
