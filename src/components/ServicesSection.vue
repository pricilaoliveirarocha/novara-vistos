<script setup>
import { RouterLink } from 'vue-router'

const services = [
  { title: 'Visto Americano', text: 'Turismo, negócios, estudos e intercâmbio.', image: 'servico-eua', alt: 'Estátua da Liberdade com o horizonte de Nova York', position: '40% 30%', to: '/servicos#visto-americano' },
  { title: 'Visto Canadense', text: 'Turismo, estudos, trabalho e residência.', image: 'servico-canada', alt: 'Bandeira do Canadá e o horizonte de Toronto', position: '60% 30%', to: '/servicos#visto-canadense' },
  { title: 'Visto de Estudante', text: 'Orientação completa para estudar no exterior.', image: 'servico-estudante', alt: 'Estudante caminhando por uma cidade universitária histórica', position: '50% 55%', to: '/servicos#visto-estudante' },
  { title: 'Passaportes', text: 'Solicitação e renovação com suporte especializado.', image: 'servico-passaporte', alt: 'Passaporte brasileiro sobre uma mesa de mármore', position: '50% 60%', to: '/servicos#passaportes' }
]
</script>

<template>
  <section class="container service-grid" aria-label="Nossos serviços">
    <article v-for="(service, index) in services" :key="service.title" class="card service-card" data-reveal :style="{ '--d': `${index * 0.07}s` }">
      <div class="service-photo">
        <img :src="`/images/${service.image}.webp`" :alt="service.alt" :style="{ objectPosition: service.position }" width="515" height="758">
      </div>
      <div class="service-body">
        <h3><RouterLink :to="service.to">{{ service.title }}</RouterLink></h3>
        <p>{{ service.text }}</p>
      </div>
    </article>
  </section>
</template>
