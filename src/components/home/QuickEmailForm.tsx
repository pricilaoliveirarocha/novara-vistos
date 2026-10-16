'use client'

import { Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import styles from './QuickEmailForm.module.css'

const subjectOptions = ['Visto americano', 'Visto canadense', 'Passaporte', 'Documentação internacional', 'Outros']
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

function getFriendlyErrorMessage(message?: string) {
    if (!message) {
        return 'Não foi possível enviar o e-mail agora.'
    }

    if (message.toLowerCase().includes('security reasons')) {
        return 'O Web3Forms bloqueou o envio por segurança. Confirme o e-mail da access key no Web3Forms e revise as restrições de domínio.'
    }

    return message
}

export default function QuickEmailForm() {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<SubmitStatus>('idle')
    const [feedback, setFeedback] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setStatus('submitting')
        setFeedback('')

        try {
            if (!accessKey) {
                throw new Error('Web3Forms não configurado. Adicione NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY no .env.')
            }

            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    botcheck: false,
                    from_name: 'WK Global Visa',
                    subject: `[Site] ${subject}`,
                    name,
                    email,
                    message: [`Telefone: ${phone || 'Não informado'}`, `Assunto: ${subject}`, '', message].join('\n'),
                }),
            })

            const data = (await response.json().catch(() => null)) as { success?: boolean; message?: string; body?: { message?: string } } | null

            if (!response.ok || !data?.success) {
                throw new Error(getFriendlyErrorMessage(data?.message ?? data?.body?.message))
            }

            setName('')
            setEmail('')
            setPhone('')
            setSubject('')
            setMessage('')
            setStatus('success')
            setFeedback(data.body?.message ?? data.message ?? 'E-mail enviado com sucesso.')
        } catch (error) {
            setStatus('error')
            setFeedback(error instanceof Error ? error.message : 'Não foi possível enviar o e-mail agora.')
        }
    }

    const isSubmitting = status === 'submitting'

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label htmlFor="quick-email-name">Nome</label>
                <input
                    id="quick-email-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Seu nome completo"
                    disabled={isSubmitting}
                    required
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="quick-email-email">E-mail</label>
                <input
                    id="quick-email-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="seu@email.com.br"
                    disabled={isSubmitting}
                    required
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="quick-email-phone">Telefone</label>
                <input
                    id="quick-email-phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="(21) 99999-9999"
                    disabled={isSubmitting}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="quick-email-subject">Assunto</label>
                <select
                    id="quick-email-subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    disabled={isSubmitting}
                    required>
                    <option value="">Selecione o assunto</option>
                    {subjectOptions.map((option) => (
                        <option
                            key={option}
                            value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className={`${styles.field} ${styles.messageField}`}>
                <label htmlFor="quick-email-message">Mensagem</label>
                <textarea
                    id="quick-email-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={4}
                    disabled={isSubmitting}
                    required
                />
            </div>

            {feedback ? (
                <p
                    className={`${styles.feedback} ${status === 'success' ? styles.feedbackSuccess : styles.feedbackError}`}
                    role="status"
                    aria-live="polite">
                    {feedback}
                </p>
            ) : null}

            <button
                className={styles.submitButton}
                type="submit"
                disabled={isSubmitting}>
                <Send
                    className={styles.submitIcon}
                    aria-hidden="true"
                />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar e-mail'}</span>
            </button>
        </form>
    )
}
