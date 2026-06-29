const WHATSAPP_NUMBER = '5521976040746'

const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Tenho interesse em saber mais sobre os serviços da Vistos Prime.'

export const WHATSAPP_MESSAGE = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ?? DEFAULT_WHATSAPP_MESSAGE

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function getWhatsAppHref(message = WHATSAPP_MESSAGE) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
