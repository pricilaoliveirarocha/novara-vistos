export type VisaService = {
    readonly id: string
    readonly category: string
    readonly flagSrc: string
    readonly flagAlt: string
    readonly title: string
    readonly subtitle?: string
    readonly price: number
    readonly priceCaption: string
    readonly secondaryPrice?: number
    readonly secondaryPriceCaption?: string
    readonly keywords?: readonly string[]
}

export const VISA_SERVICES = [
    {
        id: 'visto-americano-b1-b2',
        category: 'Turismo ou negócios',
        flagSrc: '/images/flags/us.svg',
        flagAlt: 'Bandeira dos Estados Unidos',
        title: 'Assessoria Visto Americano',
        subtitle: 'B1/B2',
        price: 590,
        priceCaption: 'por solicitante',
        keywords: ['Estados Unidos', 'EUA', 'turismo', 'negócios'],
    },
    {
        id: 'visto-americano-f1-f2',
        category: 'Estudos',
        flagSrc: '/images/flags/us.svg',
        flagAlt: 'Bandeira dos Estados Unidos',
        title: 'Assessoria Visto Americano',
        subtitle: 'F1/F2',
        price: 690,
        priceCaption: 'por solicitante',
        keywords: ['Estados Unidos', 'EUA', 'estudante', 'estudos'],
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
        keywords: ['Estados Unidos', 'EUA', 'renovação'],
    },
    {
        id: 'visto-americano-despacho-consular',
        category: 'Despacho/representação consular',
        flagSrc: '/images/flags/us.svg',
        flagAlt: 'Bandeira dos Estados Unidos',
        title: 'Visto Americano',
        subtitle: 'Despacho Consular',
        price: 390,
        priceCaption: 'por solicitante',
        keywords: ['Estados Unidos', 'EUA', 'representação consular', 'despacho'],
    },
    {
        id: 'visto-canadense-turismo',
        category: 'Turismo',
        flagSrc: '/images/flags/canada.svg',
        flagAlt: 'Bandeira do Canadá',
        title: 'Assessoria Visto Canadense',
        subtitle: 'de Turismo',
        price: 690,
        priceCaption: 'por solicitante',
        keywords: ['Canadá', 'turismo'],
    },
    {
        id: 'eta-canada',
        category: 'Autorização eletrônica',
        flagSrc: '/images/flags/canada.svg',
        flagAlt: 'Bandeira do Canadá',
        title: 'ETA Canadá',
        price: 390,
        priceCaption: 'por solicitante',
        keywords: ['Canadá', 'ETA', 'autorização eletrônica'],
    },
    {
        id: 'esta-americano-cidadania-europeia',
        category: 'Cidadania europeia',
        flagSrc: '/images/flags/us.svg',
        flagAlt: 'Bandeira dos Estados Unidos',
        title: 'ESTA Americano',
        subtitle: 'Autorização eletrônica',
        price: 390,
        priceCaption: 'por solicitante',
        keywords: ['Estados Unidos', 'EUA', 'ESTA', 'cidadania europeia'],
    },
    {
        id: 'e-visa-mexico',
        category: 'Autorização eletrônica',
        flagSrc: '/images/flags/mexico.svg',
        flagAlt: 'Bandeira do México',
        title: 'E-Visa México',
        price: 390,
        priceCaption: 'por aplicante',
        keywords: ['México', 'E-Visa', 'autorização eletrônica'],
    },
    {
        id: 'visto-australiano-turismo',
        category: 'Turismo',
        flagSrc: '/images/flags/australia.svg',
        flagAlt: 'Bandeira da Austrália',
        title: 'Visto Australiano',
        subtitle: 'de Turismo',
        price: 700,
        priceCaption: 'por solicitante',
        keywords: ['Austrália', 'turismo'],
    },
    {
        id: 'autorizacao-nova-zelandia',
        category: 'Autorização eletrônica',
        flagSrc: '/images/flags/new-zealand.svg',
        flagAlt: 'Bandeira da Nova Zelândia',
        title: 'Autorização',
        subtitle: 'Nova Zelândia',
        price: 390,
        priceCaption: 'por solicitante',
        keywords: ['Nova Zelândia', 'autorização'],
    },
    {
        id: 'passaporte-brasileiro',
        category: 'Emissão',
        flagSrc: '/images/flags/brazil.svg',
        flagAlt: 'Bandeira do Brasil',
        title: 'Passaporte',
        subtitle: 'Brasileiro',
        price: 250,
        priceCaption: 'por solicitante',
        keywords: ['Brasil', 'passaporte', 'emissão'],
    },
    {
        id: 'visto-china-japao-egito',
        category: 'Sem ou com representação consular',
        flagSrc: '/images/flags/asia.svg',
        flagAlt: 'Ícone de destinos internacionais',
        title: 'Visto China, Japão',
        subtitle: 'e Egito',
        price: 690,
        priceCaption: 'sem representação consular',
        secondaryPrice: 890,
        secondaryPriceCaption: 'com representação consular',
        keywords: ['China', 'Japão', 'Egito', 'representação consular'],
    },
    {
        id: 'visto-vietna-nepal-camboja',
        category: 'Turismo',
        flagSrc: '/images/flags/asia.svg',
        flagAlt: 'Ícone de destinos internacionais',
        title: 'Visto Vietnã, Nepal',
        subtitle: 'e Camboja',
        price: 490,
        priceCaption: 'por solicitante',
        keywords: ['Vietnã', 'Nepal', 'Camboja'],
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
