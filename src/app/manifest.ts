import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Vistos Prime',
        short_name: 'Vistos Prime',
        description: 'Assessoria especializada para vistos, autorizações eletrônicas, passaporte brasileiro e documentação internacional.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0b1f4d',
        icons: [
            {
                src: '/favicon/web-app-manifest-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/favicon/web-app-manifest-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
