import Brand from '../ui/Brand'
import GoldButton from '../ui/GoldButton'
import { site } from '../../data/site'

function SocialIcon({ type }) {
  const paths = {
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></>,
    facebook: <path d="M14.2 8.2h3V4.3c-.5-.1-2.2-.3-4.1-.3-4 0-6.7 2.4-6.7 6.8v3.8H2v4.4h4.4v11h5.4V19h4.4l.7-4.4h-5.1v-3.4c0-1.3.3-2.2 2.4-2.2Z" transform="scale(.75) translate(5 0)" fill="currentColor" stroke="none" />,
    youtube: <><path d="M21 8.2a3 3 0 0 0-2.1-2.1C17 5.6 12 5.6 12 5.6s-5 0-6.9.5A3 3 0 0 0 3 8.2a31 31 0 0 0-.5 3.8A31 31 0 0 0 3 15.8a3 3 0 0 0 2.1 2.1c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.8 31 31 0 0 0-.5-3.8Z" /><path d="m10 15 5-3-5-3Z" fill="currentColor" stroke="none" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

export default function Footer() {
  return <footer className="footer">
    <section id="contato" className="contact-cta" aria-labelledby="footer-contact-title">
      <div className="container contact-cta-inner">
        <div className="cta-panel">
          <p className="eyebrow">Pronto para o seu próximo destino?</p>
          <h2 id="footer-contact-title">Fale com um especialista.</h2>
          <p>Tire suas dúvidas e receba uma orientação personalizada<br className="desktop-break" /> para o seu caso.</p>
          <GoldButton href={site.whatsapp}>Atendimento pelo WhatsApp</GoldButton>
        </div>
      </div>
    </section>
    <div className="container footer-top">
      <Brand />
      <div className="footer-center">
        <nav aria-label="Navegação do rodapé">{site.nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <p>Seu mundo, <em>sem fronteiras.</em></p>
      </div>
      <div className="footer-arrival">
        <div className="socials" aria-label="Redes sociais"><a href="#instagram" aria-label="Instagram"><SocialIcon type="instagram" /></a><a href="#facebook" aria-label="Facebook"><SocialIcon type="facebook" /></a><a href="#youtube" aria-label="YouTube"><SocialIcon type="youtube" /></a></div>
        <span className="flight-destination" data-flight-destination aria-hidden="true"><span /></span>
      </div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Novara Vistos. Todos os direitos reservados.</span><span><a href="#privacidade">Política de Privacidade</a><i /> <a href="#termos">Termos de Uso</a></span></div>
  </footer>
}
