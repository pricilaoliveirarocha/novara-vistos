import { NextResponse } from 'next/server'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const DEFAULT_ERROR_MESSAGE = 'Nao foi possivel enviar o e-mail agora.'

type ContactPayload = {
    name?: unknown
    email?: unknown
    phone?: unknown
    subject?: unknown
    message?: unknown
    botcheck?: unknown
}

type Web3FormsResponse = {
    success?: boolean
    message?: string
    body?: {
        message?: string
    }
}

function getText(value: unknown) {
    return typeof value === 'string' ? value.trim() : ''
}

function getFriendlyErrorMessage(message?: string) {
    if (!message) {
        return DEFAULT_ERROR_MESSAGE
    }

    if (message.toLowerCase().includes('security reasons')) {
        return 'O Web3Forms bloqueou o envio por seguranca. Confirme o e-mail da access key no Web3Forms e revise as restricoes de dominio.'
    }

    return message
}

export async function POST(request: Request) {
    try {
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY ?? process.env['WEB3FORMS_ACCESS_KEY']

        if (!accessKey) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Web3Forms nao configurado. Adicione WEB3FORMS_ACCESS_KEY nas variaveis de ambiente.',
                },
                { status: 500 },
            )
        }

        const payload = (await request.json().catch(() => null)) as ContactPayload | null

        if (!payload) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Dados do formulario invalidos.',
                },
                { status: 400 },
            )
        }

        const name = getText(payload.name)
        const email = getText(payload.email)
        const phone = getText(payload.phone)
        const subject = getText(payload.subject)
        const message = getText(payload.message)

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Preencha nome, e-mail, assunto e mensagem.',
                },
                { status: 400 },
            )
        }

        const response = await fetch(WEB3FORMS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                access_key: accessKey,
                botcheck: Boolean(payload.botcheck),
                from_name: 'Vistos Prime',
                subject: `[Site] ${subject}`,
                name,
                email,
                message: [`Telefone: ${phone || 'Nao informado'}`, `Assunto: ${subject}`, '', message].join('\n'),
            }),
        })

        const data = (await response.json().catch(() => null)) as Web3FormsResponse | null

        if (!response.ok || !data?.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: getFriendlyErrorMessage(data?.message ?? data?.body?.message),
                },
                { status: response.ok ? 400 : response.status },
            )
        }

        return NextResponse.json({
            success: true,
            message: data.body?.message ?? data.message ?? 'E-mail enviado com sucesso.',
        })
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: DEFAULT_ERROR_MESSAGE,
            },
            { status: 500 },
        )
    }
}
