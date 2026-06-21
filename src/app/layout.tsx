import type { Metadata } from 'next'

import Header from '@/components/layout/Header'

import './globals.css'

export const metadata: Metadata = {
    title: 'Vistos Prime',
    description: 'Assessoria profissional para vistos consulares e passaportes.',
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
            </body>
        </html>
    )
}
