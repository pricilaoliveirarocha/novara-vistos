<script setup>
import { Award, Globe2, ShieldCheck, UserRound } from 'lucide-vue-next'

const reasons = [
  { icon: Award, title: 'Experiência', text: 'com foco em resultados' },
  { icon: UserRound, title: 'Atendimento', text: 'personalizado' },
  { icon: ShieldCheck, title: 'Transparência', text: 'em todas as etapas' },
  { icon: Globe2, title: 'Suporte em', text: 'todo o Brasil' }
]
</script>

<template>
  <section class="section why paper">
    <div class="container why-grid">
      <div data-reveal>
        <p class="eyebrow eyebrow-dark">Por que escolher a Novara</p>
        <h2>Mais que uma assessoria,<br>uma parceira na sua jornada.</h2>
      </div>
      <ul class="why-list">
        <li v-for="(reason, index) in reasons" :key="reason.title" data-reveal :style="{ '--d': `${index * 0.08}s` }">
          <span class="why-icon"><component :is="reason.icon" :size="22" :stroke-width="1.4" aria-hidden="true" /></span>
          <p><b>{{ reason.title }}</b>{{ reason.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
