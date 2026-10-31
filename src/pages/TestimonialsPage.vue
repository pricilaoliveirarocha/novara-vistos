<script setup>
import { ArrowRight } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import CtaSection from '../components/CtaSection.vue'
import WhatsAppIcon from '../components/WhatsAppIcon.vue'
import { whatsapp } from '../site'
</script>

<template>
  <PageHero
    eyebrow="Depoimentos"
    title="Histórias reais"
    accent="de novos destinos."
    lead="Quem já passou por esse caminho conta como foi ter a Novara ao lado em cada etapa."
    image="servico-eua"
    position="50% 40%"
  />
  <TestimonialSection />
  <section class="section paper share-story">
    <div class="container" data-reveal>
      <p class="eyebrow eyebrow-dark">Já é cliente Novara?</p>
      <h2>Conte a sua história.</h2>
      <p>Sua experiência pode ajudar outras pessoas a darem o próximo passo com mais segurança.</p>
      <a class="btn btn-gold" :href="whatsapp('Olá, sou cliente da Novara e gostaria de enviar meu depoimento.')" target="_blank" rel="noopener">
        <WhatsAppIcon /> Enviar meu depoimento <ArrowRight class="btn-arrow" :size="18" aria-hidden="true" />
      </a>
    </div>
  </section>
  <CtaSection />
</template>
