export type VisaService = {
    readonly id: string
    readonly category: string
    readonly flagSrc: string
    readonly flagAlt: string
    readonly title: string
    readonly subtitle?: string
    readonly price: number
    readonly priceCaption: string
}

export const VISA_SERVICES = [
    {
        id: 'visto-americano-b1-b2',
        category: 'Turismo e negócios',
        flagSrc: '/images/flags/us.svg',
        flagAlt: 'Bandeira dos Estados Unidos',
        title: 'Visto Americano',
        subtitle: 'B1/B2',
        price: 590,
        priceCaption: 'por solicitante',
    },
    {
        id: 'visto-americano-f1-f2',
        category: 'Estudo',
        flagSrc: '/images/flags/us.svg',
        flagAlt: 'Bandeira dos Estados Unidos',
        title: 'Visto Americano',
        subtitle: 'F1/F2',
        price: 690,
        priceCaption: 'por solicitante',
    },
    {
        id: 'renovacao-visto-americano',
        category: 'Renovação',
        flagSrc: '/images/flags/us.svg',
        flagAlt: 'Bandeira dos Estados Unidos',
        title: 'Renovação do',
        subtitle: 'Visto Americano',
        price: 590,
        priceCaption: 'por solicitante',
    },
    {
        id: 'visto-canadense-turismo',
        category: 'Turismo',
        flagSrc: '/images/flags/canada.svg',
        flagAlt: 'Bandeira do Canadá',
        title: 'Visto Canadense',
        subtitle: 'de Turismo',
        price: 690,
        priceCaption: 'por solicitante',
    },
    {
        id: 'eta-canada',
        category: 'Autorização eletrônica',
        flagSrc: '/images/flags/canada.svg',
        flagAlt: 'Bandeira do Canadá',
        title: 'ETA Canadá',
        price: 390,
        priceCaption: 'por solicitante',
    },
] as const satisfies readonly VisaService[]

export type VisaServiceId = (typeof VISA_SERVICES)[number]['id']

export const MAIN_VISA_SERVICE_IDS = [
    'visto-americano-b1-b2',
    'visto-americano-f1-f2',
    'renovacao-visto-americano',
    'visto-canadense-turismo',
] as const satisfies readonly VisaServiceId[]

export function getVisaServicesByIds(ids: readonly VisaServiceId[]): VisaService[] {
    const servicesById = new Map<string, VisaService>(VISA_SERVICES.map((service) => [service.id, service]))

    return ids.map((id) => {
        const service = servicesById.get(id)

        if (!service) {
            throw new Error(`Serviço de visto não encontrado: ${id}`)
        }

        return service
    })
}

export function getVisaServiceLabel(service: VisaService) {
    return [service.title, service.subtitle].filter(Boolean).join(' ')
}
