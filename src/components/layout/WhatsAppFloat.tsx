import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import styles from './WhatsAppFloat.module.css'

const whatsappNumber = '55982256381'
const whatsappMessage = 'Olá! Tenho interesse em saber mais sobre os serviços da Vistos Prime.'

export default function WhatsAppFloat() {
    const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <Link
            aria-label="Falar no WhatsApp"
            className={styles.whatsAppFloat}
            href={href}
            rel="noopener noreferrer"
            target="_blank">
            <FaWhatsapp aria-hidden="true" />
        </Link>
    )
}
