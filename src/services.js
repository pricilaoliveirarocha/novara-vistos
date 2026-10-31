const eua = { image: 'servico-eua', position: '35% 15%' }
const canada = { image: 'servico-canada', position: '40% 20%' }
const aeroporto = { image: 'aeroporto-cta-mobile', position: '48% 45%' }

export const visaServices = [
    { id: 'visto-americano-b1-b2', category: 'Turismo ou negócios', flag: 'us', country: 'Estados Unidos', title: 'Assessoria Visto Americano', subtitle: 'B1/B2', price: 590, priceCaption: 'por solicitante', ...eua, features: ['Análise de perfil', 'Preenchimento de formulários', 'Suporte na entrevista'], keywords: ['Estados Unidos', 'EUA', 'turismo', 'negócios'] },
    { id: 'visto-americano-f1-f2', category: 'Estudos', flag: 'us', country: 'Estados Unidos', title: 'Assessoria Visto Americano', subtitle: 'F1/F2', price: 690, priceCaption: 'por solicitante', image: 'servico-estudante', position: '50% 45%', features: ['Orientação completa', 'Documentação acadêmica', 'Acompanhamento consular'], keywords: ['Estados Unidos', 'EUA', 'estudante', 'estudos'] },
    { id: 'renovacao-visto-americano', category: 'Renovação', flag: 'us', country: 'Estados Unidos', title: 'Renovação do', subtitle: 'Visto Americano', price: 590, priceCaption: 'por solicitante', image: 'servico-passaporte', position: '50% 55%', features: ['Análise da situação atual', 'Atualização de documentos', 'Suporte no agendamento'], keywords: ['Estados Unidos', 'EUA', 'renovação'] },
    { id: 'visto-americano-despacho-consular', category: 'Despacho/representação consular', flag: 'us', country: 'Estados Unidos', title: 'Visto Americano', subtitle: 'Despacho Consular', price: 390, priceCaption: 'por solicitante', image: 'hero-passaporte-mobile', position: '82% 40%', features: ['Conferência de documentos', 'Representação consular', 'Acompanhamento do processo'], keywords: ['Estados Unidos', 'EUA', 'representação consular', 'despacho'] },
    { id: 'visto-canadense-turismo', category: 'Turismo', flag: 'ca', country: 'Canadá', title: 'Assessoria Visto Canadense', subtitle: 'de Turismo', price: 690, priceCaption: 'por solicitante', ...canada, features: ['Análise de perfil', 'Preenchimento de formulários', 'Organização de documentos'], keywords: ['Canadá', 'turismo'] },
    { id: 'eta-canada', category: 'Autorização eletrônica', flag: 'ca', country: 'Canadá', title: 'ETA Canadá', price: 390, priceCaption: 'por solicitante', image: 'servico-canada', position: '70% 70%', features: ['Verificação de elegibilidade', 'Preenchimento da solicitação', 'Acompanhamento do pedido'], keywords: ['Canadá', 'ETA', 'autorização eletrônica'] },
    { id: 'esta-americano-cidadania-europeia', category: 'Cidadania europeia', flag: 'us', country: 'Estados Unidos', title: 'ESTA Americano', subtitle: 'Autorização eletrônica', price: 390, priceCaption: 'por solicitante', ...eua, features: ['Verificação de elegibilidade', 'Preenchimento da solicitação', 'Acompanhamento do pedido'], keywords: ['Estados Unidos', 'EUA', 'ESTA', 'cidadania europeia'] },
    { id: 'e-visa-mexico', category: 'Autorização eletrônica', flag: 'mx', country: 'México', title: 'E-Visa México', price: 390, priceCaption: 'por aplicante', ...aeroporto, features: ['Verificação de elegibilidade', 'Preenchimento da solicitação', 'Acompanhamento do pedido'], keywords: ['México', 'E-Visa', 'autorização eletrônica'] },
    { id: 'visto-australiano-turismo', category: 'Turismo', flag: 'au', country: 'Austrália', title: 'Visto Australiano', subtitle: 'de Turismo', price: 700, priceCaption: 'por solicitante', ...aeroporto, features: ['Análise de perfil', 'Preenchimento de formulários', 'Organização de documentos'], keywords: ['Austrália', 'turismo'] },
    { id: 'autorizacao-nova-zelandia', category: 'Autorização eletrônica', flag: 'nz', country: 'Nova Zelândia', title: 'Autorização', subtitle: 'Nova Zelândia', price: 390, priceCaption: 'por solicitante', ...aeroporto, features: ['Verificação de elegibilidade', 'Preenchimento da solicitação', 'Acompanhamento do pedido'], keywords: ['Nova Zelândia', 'autorização'] },
    { id: 'passaporte-brasileiro', category: 'Emissão', flag: 'br', country: 'Brasil', title: 'Passaporte', subtitle: 'Brasileiro', price: 250, priceCaption: 'por solicitante', image: 'servico-passaporte', position: '50% 55%', features: ['Orientação sobre documentos', 'Preenchimento do formulário', 'Apoio no agendamento'], keywords: ['Brasil', 'passaporte', 'emissão'] },
    { id: 'visto-china-japao-egito', category: 'Sem ou com representação consular', country: 'China, Japão e Egito', title: 'Visto China, Japão', subtitle: 'e Egito', price: 690, priceCaption: 'sem representação consular', secondaryPrice: 890, secondaryPriceCaption: 'com representação consular', ...aeroporto, features: ['Orientação por destino', 'Organização de documentos', 'Acompanhamento do processo'], keywords: ['China', 'Japão', 'Egito', 'representação consular'] },
    { id: 'visto-vietna-nepal-camboja', category: 'Turismo', country: 'Vietnã, Nepal e Camboja', title: 'Visto Vietnã, Nepal', subtitle: 'e Camboja', price: 490, priceCaption: 'por solicitante', ...aeroporto, features: ['Orientação por destino', 'Organização de documentos', 'Acompanhamento do processo'], keywords: ['Vietnã', 'Nepal', 'Camboja'] }
]

export const serviceFilters = [
    { id: 'todos', label: 'Todos' },
    { id: 'us', label: 'Estados Unidos', flag: 'us' },
    { id: 'ca', label: 'Canadá', flag: 'ca' },
    { id: 'mx', label: 'México', flag: 'mx' },
    { id: 'au', label: 'Austrália', flag: 'au' },
    { id: 'outros', label: 'Outros' }
]

const mainFlags = ['us', 'ca', 'mx', 'au']

export const matchesFilter = (service, filter) => {
    if (filter === 'todos') return true
    return filter === 'outros' ? !mainFlags.includes(service.flag) : service.flag === filter
}

export const getServiceLabel = (service) => [service.title, service.subtitle].filter(Boolean).join(' ')
