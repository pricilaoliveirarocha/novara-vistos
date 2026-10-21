export default function SectionTitle({ eyebrow, title, copy, light = false }) {
  return <div className={`section-heading reveal-heading ${light ? 'light' : ''}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {copy && <p className="heading-copy">{copy}</p>}
  </div>
}
