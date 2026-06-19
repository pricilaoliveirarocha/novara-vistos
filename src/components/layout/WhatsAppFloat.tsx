import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

import styles from './WhatsAppFloat.module.css'

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')
const whatsappMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? 'Olá! Tenho interesse em saber mais sobre os serviços da Vistos Prime.'

export default function WhatsAppFloat() {
    if (!whatsappNumber) {
        return null
    }

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

    // Testing
}
