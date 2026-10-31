<script setup>
import { ArrowRight } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsapp } from '../site'

defineProps({
  title: { type: String, default: 'Seu próximo destino' },
  accent: { type: String, default: 'começa com uma conversa.' },
  message: { type: String, default: 'Olá, quero uma orientação personalizada sobre vistos.' }
})
</script>

<template>
  <section class="cta">
    <div class="container cta-inner" data-reveal>
      <h2>{{ title }}<br><span class="accent">{{ accent }}</span></h2>
      <div class="cta-side">
        <p>Fale com um especialista e receba uma orientação personalizada para o seu caso.</p>
        <a class="btn btn-primary" :href="whatsapp(message)" target="_blank" rel="noopener">
          <WhatsAppIcon /> Atendimento pelo WhatsApp <ArrowRight class="btn-arrow" :size="17" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</template>
