export const visaServices = [
  { id: 'visto-americano-b1-b2', category: 'Turismo ou negócios', flag: 'us', title: 'Assessoria Visto Americano', subtitle: 'B1/B2', price: 590, priceCaption: 'por solicitante', keywords: ['Estados Unidos', 'EUA', 'turismo', 'negócios'] },
  { id: 'visto-americano-f1-f2', category: 'Estudos', flag: 'us', title: 'Assessoria Visto Americano', subtitle: 'F1/F2', price: 690, priceCaption: 'por solicitante', keywords: ['Estados Unidos', 'EUA', 'estudante', 'estudos'] },
  { id: 'renovacao-visto-americano', category: 'Renovação', flag: 'us', title: 'Renovação do', subtitle: 'Visto Americano', price: 590, priceCaption: 'por solicitante', keywords: ['Estados Unidos', 'EUA', 'renovação'] },
  { id: 'visto-americano-despacho-consular', category: 'Despacho/representação consular', flag: 'us', title: 'Visto Americano', subtitle: 'Despacho Consular', price: 390, priceCaption: 'por solicitante', keywords: ['Estados Unidos', 'EUA', 'representação consular', 'despacho'] },
  { id: 'visto-canadense-turismo', category: 'Turismo', flag: 'ca', title: 'Assessoria Visto Canadense', subtitle: 'de Turismo', price: 690, priceCaption: 'por solicitante', keywords: ['Canadá', 'turismo'] },
  { id: 'eta-canada', category: 'Autorização eletrônica', flag: 'ca', title: 'ETA Canadá', price: 390, priceCaption: 'por solicitante', keywords: ['Canadá', 'ETA', 'autorização eletrônica'] },
  { id: 'esta-americano-cidadania-europeia', category: 'Cidadania europeia', flag: 'us', title: 'ESTA Americano', subtitle: 'Autorização eletrônica', price: 390, priceCaption: 'por solicitante', keywords: ['Estados Unidos', 'EUA', 'ESTA', 'cidadania europeia'] },
  { id: 'e-visa-mexico', category: 'Autorização eletrônica', flag: 'mx', title: 'E-Visa México', price: 390, priceCaption: 'por aplicante', keywords: ['México', 'E-Visa', 'autorização eletrônica'] },
  { id: 'visto-australiano-turismo', category: 'Turismo', flag: 'au', title: 'Visto Australiano', subtitle: 'de Turismo', price: 700, priceCaption: 'por solicitante', keywords: ['Austrália', 'turismo'] },
  { id: 'autorizacao-nova-zelandia', category: 'Autorização eletrônica', flag: 'nz', title: 'Autorização', subtitle: 'Nova Zelândia', price: 390, priceCaption: 'por solicitante', keywords: ['Nova Zelândia', 'autorização'] },
  { id: 'passaporte-brasileiro', category: 'Emissão', flag: 'br', title: 'Passaporte', subtitle: 'Brasileiro', price: 250, priceCaption: 'por solicitante', keywords: ['Brasil', 'passaporte', 'emissão'] },
  { id: 'visto-china-japao-egito', category: 'Sem ou com representação consular', title: 'Visto China, Japão', subtitle: 'e Egito', price: 690, priceCaption: 'sem representação consular', secondaryPrice: 890, secondaryPriceCaption: 'com representação consular', keywords: ['China', 'Japão', 'Egito', 'representação consular'] },
  { id: 'visto-vietna-nepal-camboja', category: 'Turismo', title: 'Visto Vietnã, Nepal', subtitle: 'e Camboja', price: 490, priceCaption: 'por solicitante', keywords: ['Vietnã', 'Nepal', 'Camboja'] }
]

export const getServiceLabel = (service) => [service.title, service.subtitle].filter(Boolean).join(' ')
