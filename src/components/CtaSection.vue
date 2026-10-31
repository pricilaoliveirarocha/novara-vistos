<script setup>
import { ArrowRight } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsapp } from '../site'
</script>

<template>
  <section class="cta">
    <div class="cta-photo">
      <img
        src="/images/aeroporto-cta.webp"
        srcset="/images/aeroporto-cta-mobile.webp 900w, /images/aeroporto-cta.webp 1920w"
        sizes="(max-width: 900px) 100vw, 70vw"
        width="1920"
        height="702"
        loading="lazy"
        alt="Viajante com mala aguardando o voo em um aeroporto ao pôr do sol"
      >
    </div>
    <div class="cta-copy" data-reveal>
      <p class="eyebrow">Pronto para o seu próximo destino?</p>
      <h2>Fale com um especialista</h2>
      <p>Tire suas dúvidas e receba uma orientação personalizada para o seu caso.</p>
      <a class="btn btn-gold" :href="whatsapp('Olá, quero uma orientação personalizada sobre vistos.')" target="_blank" rel="noopener">
        <WhatsAppIcon /> Atendimento pelo WhatsApp <ArrowRight class="btn-arrow" :size="18" aria-hidden="true" />
      </a>
    </div>
  </section>
</template>
