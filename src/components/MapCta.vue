<script setup>
import { ArrowRight } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsapp } from '../site'

defineProps({
  eyebrow: { type: String, required: true },
  lead: { type: String, required: true },
  message: { type: String, required: true }
})
</script>

<template>
  <section class="next-destination">
    <img class="next-map" src="/images/mapa-rota.webp" width="1072" height="372" alt="" loading="lazy">
    <div class="container next-copy" data-reveal>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2><slot /></h2>
      <p>{{ lead }}</p>
      <a class="btn btn-gold" :href="whatsapp(message)" target="_blank" rel="noopener">
        <WhatsAppIcon /> Atendimento pelo WhatsApp <ArrowRight class="btn-arrow" :size="18" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>
