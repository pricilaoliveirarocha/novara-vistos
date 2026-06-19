import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/globals.css'

const montserrat = Montserrat({
    variable: '--font-heading',
    subsets: ['latin'],
    weight: ['500', '600', '700', '800'],
})

const openSans = Open_Sans({
    variable: '--font-body',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Vistos Prime | Vistos e Documentação Internacional',
    description: 'Assessoria especializada para vistos, autorizações eletrônicas, passaporte brasileiro e documentação internacional.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="pt-BR"
            className={`${montserrat.variable} ${openSans.variable}`}>
            <body className="site-body">
                <Header />

                <main className="site-main">{children}</main>

                <Footer />
            </body>
        </html>
    )
}
