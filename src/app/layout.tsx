import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'

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
    title: 'Vistos Prime',
    description: 'Assessoria especializada para vistos e documentação internacional.',
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
            <body>{children}</body>
        </html>
    )
}
