'use client'

import { Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import styles from './QuickEmailForm.module.css'

const subjectOptions = ['Visto americano', 'Visto canadense', 'Passaporte', 'Documentação internacional', 'Outros']

const CONTACT_EMAIL = 'vistosprimerj@gmail.com'

export default function QuickEmailForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const emailSubject = subject ? `[Site] ${subject}` : '[Site] Dúvida'
        const emailBody = [`Nome: ${name}`, `E-mail: ${email}`, `Telefone: ${phone || 'Não informado'}`, `Assunto: ${subject || 'Não informado'}`, '', message].join('\n')

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    }

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
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="quick-email-subject">Assunto</label>
                <select
                    id="quick-email-subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
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
                    required
                />
            </div>

            <button
                className={styles.submitButton}
                type="submit">
                <Send
                    className={styles.submitIcon}
                    aria-hidden="true"
                />
                <span>Enviar e-mail</span>
            </button>
        </form>
    )
}
