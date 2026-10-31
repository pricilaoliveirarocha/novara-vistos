<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsapp } from '../site'
</script>

<template>
  <section class="hero container">
    <p class="eyebrow hero-in" style="--d: .05s">Assessoria de vistos consulares</p>
    <h1 class="hero-in" style="--d: .12s">Seu mundo,<br><span class="accent">sem fronteiras.</span></h1>
    <p class="lead hero-in" style="--d: .22s">Cuidamos de todo o processo para você conquistar seus vistos e passaportes com segurança, praticidade e acompanhamento especializado.</p>
    <div class="btn-group hero-in" style="--d: .32s">
      <a class="btn btn-primary" :href="whatsapp('Olá, quero iniciar minha solicitação de assessoria.')" target="_blank" rel="noopener">
        <WhatsAppIcon /> Fale com um especialista <ArrowRight class="btn-arrow" :size="17" aria-hidden="true" />
      </a>
      <RouterLink class="btn btn-outline" to="/servicos">Ver serviços</RouterLink>
    </div>
  </section>
</template>
