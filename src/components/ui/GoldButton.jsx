import { ArrowRight, MessageCircle } from 'lucide-react'

export default function GoldButton({ children, href, outline = false, className = '' }) {
  return <a className={`gold-button ${outline ? 'outline' : ''} ${className}`} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
    <MessageCircle size={17} aria-hidden="true" />
    <span>{children}</span>
    {!outline && <ArrowRight className="button-arrow" size={17} aria-hidden="true" />}
  </a>
}
