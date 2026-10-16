import type { Metadata } from 'next'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

import './globals.css'

export const metadata: Metadata = {
    title: 'WK Global Visa',
    description: 'Assessoria profissional para vistos consulares e passaportes em todo Brasil.',
    icons: {
        icon: [
            {
                url: '/images/favicons/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            },
        ],
        shortcut: '/images/favicons/favicon-16x16.png',
    },
}

// Exporta o layout raiz do aplicativo, que envolve todas as páginas e componentes.
// Define a estrutura HTML básica, incluindo a tag <html> e <body>, e renderiza os filhos passados para o layout.
// Os filhos são os componentes ou páginas que serão renderizados dentro do layout, permitindo que o layout seja reutilizado em diferentes partes do aplicativo.
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
