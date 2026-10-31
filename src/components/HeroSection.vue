<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, Check } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsapp } from '../site'

const highlights = ['Atendimento especializado', 'Suporte em todo o Brasil', 'Processo seguro']
</script>

<template>
  <section class="hero">
    <img
      class="hero-photo"
      src="/images/hero-passaporte.webp"
      srcset="/images/hero-passaporte-mobile.webp 900w, /images/hero-passaporte.webp 1920w"
      sizes="100vw"
      width="1920"
      height="1200"
      fetchpriority="high"
      alt="Mão segurando passaporte brasileiro com cartões de embarque, com o Parlamento de Londres ao pôr do sol"
    >
    <div class="container hero-content">
      <p class="eyebrow hero-in" style="--d: .1s">Assessoria de vistos consulares</p>
      <h1 class="hero-in" style="--d: .2s">Seu mundo,<br><span>sem fronteiras.</span></h1>
      <p class="hero-lead hero-in" style="--d: .32s">Cuidamos de todo o processo para você conquistar seus vistos e passaportes com segurança e praticidade.</p>
      <div class="btn-group hero-in" style="--d: .44s">
        <a class="btn btn-gold" :href="whatsapp('Olá, quero iniciar minha solicitação de assessoria.')" target="_blank" rel="noopener">
          <WhatsAppIcon /> Fale com um especialista <ArrowRight class="btn-arrow" :size="17" aria-hidden="true" />
        </a>
        <RouterLink class="btn btn-ghost" to="/servicos">Ver serviços</RouterLink>
      </div>
      <ul class="hero-highlights hero-in" style="--d: .56s">
        <li v-for="item in highlights" :key="item"><Check :size="15" :stroke-width="2.5" aria-hidden="true" />{{ item }}</li>
      </ul>
    </div>
  </section>
</template>
