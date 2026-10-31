<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'

const services = [
  { title: 'Visto Americano', text: 'Turismo, negócios, estudos e renovação.', image: 'servico-eua', alt: 'Estátua da Liberdade com o horizonte de Nova York', position: '40% 30%', to: '/servicos#servico-visto-americano-b1-b2' },
  { title: 'Visto Canadense', text: 'Visto de turismo e ETA Canadá.', image: 'servico-canada', alt: 'Bandeira do Canadá e o horizonte de Toronto', position: '60% 30%', to: '/servicos#servico-visto-canadense-turismo' },
  { title: 'Visto de Estudante', text: 'Assessoria para o visto americano F1/F2.', image: 'servico-estudante', alt: 'Estudante caminhando por uma cidade universitária histórica', position: '50% 55%', to: '/servicos#servico-visto-americano-f1-f2' },
  { title: 'Passaportes', text: 'Emissão do passaporte brasileiro com suporte especializado.', image: 'servico-passaporte', alt: 'Passaporte brasileiro sobre uma mesa de mármore', position: '50% 60%', to: '/servicos#servico-passaporte-brasileiro' }
]
</script>

<template>
  <section class="section container">
    <div class="section-head" data-reveal>
      <div>
        <p class="eyebrow">Nossos serviços</p>
        <h2 class="title-large">Para onde você quer ir?</h2>
      </div>
      <p>Vistos, passaportes e documentação internacional com suporte em todas as etapas.</p>
    </div>
    <div class="service-grid">
      <article v-for="(service, index) in services" :key="service.title" class="service-card" data-reveal :style="{ '--d': `${index * 0.08}s` }">
        <img :src="`/images/${service.image}.webp`" :alt="service.alt" :style="{ objectPosition: service.position }" width="515" height="758" loading="lazy">
        <div class="service-body">
          <h3><RouterLink :to="service.to">{{ service.title }}</RouterLink></h3>
          <p>{{ service.text }}</p>
          <span class="service-arrow" aria-hidden="true"><ArrowUpRight :size="18" /></span>
        </div>
      </article>
    </div>
  </section>
</template>
