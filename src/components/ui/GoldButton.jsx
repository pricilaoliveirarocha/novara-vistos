import { ArrowRight, MessageCircle } from 'lucide-react'

export default function GoldButton({ children, href, outline = false, className = '' }) {
  const classes = ['gold-button', outline && 'outline', className].filter(Boolean).join(' ')
  const opensNewTab = href?.startsWith('http')

  return (
    <a
      className={classes}
      href={href}
      target={opensNewTab ? '_blank' : undefined}
      rel={opensNewTab ? 'noreferrer' : undefined}
    >
      <MessageCircle size={17} aria-hidden="true" />
      <span>{children}</span>
      {!outline && <ArrowRight className="button-arrow" size={17} aria-hidden="true" />}
    </a>
  )
}
