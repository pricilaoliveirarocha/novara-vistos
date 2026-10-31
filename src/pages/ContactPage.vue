<script setup>
import { computed, reactive } from 'vue'
import { ArrowRight, Globe2, Mail } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import WhatsAppIcon from '../components/WhatsAppIcon.vue'
import { email, phoneLabel, whatsapp } from '../site'

const subjects = ['Visto Americano', 'Visto Canadense', 'Visto de Estudante', 'Passaportes', 'Outro assunto']
const form = reactive({ name: '', subject: subjects[0], message: '' })

const whatsappMessage = computed(() => [
  `Olá, meu nome é ${form.name.trim()}.`,
  `Quero falar sobre: ${form.subject}.`,
  form.message.trim()
].filter(Boolean).join('\n'))

// O site não tem servidor: o formulário abre a conversa já preenchida no WhatsApp.
const submit = () => window.open(whatsapp(whatsappMessage.value), '_blank', 'noopener')
</script>

<template>
  <PageHero
    eyebrow="Contato"
    title="Fale com"
    accent="um especialista."
    lead="Tire suas dúvidas e receba uma orientação personalizada para o seu caso."
    image="aeroporto-cta"
    position="30% 50%"
  />
  <section class="section paper contact">
    <div class="container contact-grid">
      <div class="contact-cards">
        <a class="contact-card" :href="whatsapp('Olá, quero falar com um especialista em vistos.')" target="_blank" rel="noopener" data-reveal>
          <span class="why-icon"><WhatsAppIcon /></span>
          <span><b>WhatsApp</b>{{ phoneLabel }}</span>
        </a>
        <a class="contact-card" :href="`mailto:${email}`" data-reveal style="--d: .08s">
          <span class="why-icon"><Mail :size="20" aria-hidden="true" /></span>
          <span><b>E-mail</b>{{ email }}</span>
        </a>
        <div class="contact-card" data-reveal style="--d: .16s">
          <span class="why-icon"><Globe2 :size="20" aria-hidden="true" /></span>
          <span><b>Atendimento</b>Em todo o Brasil</span>
        </div>
      </div>
      <form class="contact-form" data-reveal style="--d: .12s" @submit.prevent="submit">
        <h2>Envie sua mensagem</h2>
        <label>Seu nome
          <input v-model="form.name" type="text" name="name" autocomplete="name" required>
        </label>
        <label>Assunto
          <select v-model="form.subject" name="subject">
            <option v-for="subject in subjects" :key="subject">{{ subject }}</option>
          </select>
        </label>
        <label>Mensagem (opcional)
          <textarea v-model="form.message" name="message" rows="4"></textarea>
        </label>
        <button class="btn btn-gold" type="submit">
          <WhatsAppIcon /> Continuar no WhatsApp <ArrowRight class="btn-arrow" :size="18" aria-hidden="true" />
        </button>
      </form>
    </div>
  </section>
</template>
