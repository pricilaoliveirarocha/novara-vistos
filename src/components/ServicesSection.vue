<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, BookUser, GraduationCap, Leaf } from 'lucide-vue-next'
import FlagIcon from './FlagIcon.vue'

const services = [
  { title: 'Visto Americano', text: 'Turismo, negócios, estudos e intercâmbio.', image: 'servico-eua', alt: 'Estátua da Liberdade com o horizonte de Nova York', position: '40% 35%', to: '/servicos#visto-americano', flag: 'us' },
  { title: 'Visto Canadense', text: 'Turismo, estudos, trabalho e residência.', image: 'servico-canada', alt: 'Bandeira do Canadá e o horizonte de Toronto', position: '60% 35%', to: '/servicos#visto-canadense', icon: Leaf },
  { title: 'Visto de Estudante', text: 'Orientação completa para estudar no exterior.', image: 'servico-estudante', alt: 'Estudante caminhando por uma cidade universitária histórica', position: '50% 45%', to: '/servicos#visto-estudante', icon: GraduationCap },
  { title: 'Passaportes', text: 'Solicitação e renovação com suporte especializado.', image: 'servico-passaporte', alt: 'Passaporte brasileiro sobre uma mesa de mármore', position: '50% 60%', to: '/servicos#passaportes', icon: BookUser }
]
</script>

<template>
  <section class="section services paper">
    <div class="container">
      <div class="split-heading" data-reveal>
        <div>
          <p class="eyebrow eyebrow-dark">Nossos serviços</p>
          <h2>Assessoria para cada destino.</h2>
        </div>
        <p>Vistos, passaportes e documentação internacional com suporte especializado em todas as etapas.</p>
      </div>
    </div>
    <div class="container container-wide service-grid">
      <article v-for="(service, index) in services" :key="service.title" class="service-card" data-reveal :style="{ '--d': `${index * 0.1}s` }">
        <div class="service-photo">
          <img :src="`/images/${service.image}.webp`" :alt="service.alt" :style="{ objectPosition: service.position }" width="640" height="948" loading="lazy">
        </div>
        <div class="service-body">
          <span class="round-icon">
            <FlagIcon v-if="service.flag" :country="service.flag" />
            <component :is="service.icon" v-else :size="22" :stroke-width="1.5" aria-hidden="true" />
          </span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
          <RouterLink class="service-link" :to="service.to" :aria-label="`Conhecer assessoria: ${service.title}`"><ArrowRight :size="15" aria-hidden="true" /></RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>
