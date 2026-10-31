<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, Award, Globe2, ShieldCheck, UserRound } from 'lucide-vue-next'

const reasons = [
  { icon: Award, title: 'Experiência', text: 'Foco em resultados em cada processo.' },
  { icon: UserRound, title: 'Atendimento personalizado', text: 'Orientação de acordo com o seu perfil e objetivo.' },
  { icon: ShieldCheck, title: 'Transparência', text: 'Você sabe o que acontece em todas as etapas.' },
  { icon: Globe2, title: 'Suporte em todo o Brasil', text: 'Acompanhamento próximo, onde você estiver.' }
]
</script>

<template>
  <section class="section container split">
    <div class="split-photo" data-reveal>
      <img
        src="/images/aeroporto-cta.webp"
        srcset="/images/aeroporto-cta-mobile.webp 900w, /images/aeroporto-cta.webp 1920w"
        sizes="(max-width: 820px) 100vw, 1200px"
        :style="{ objectPosition: '16% 50%' }"
        width="1920"
        height="702"
        loading="lazy"
        alt="Viajante com mala aguardando o voo em um aeroporto ao pôr do sol"
      >
    </div>
    <div data-reveal style="--d: .1s">
      <p class="eyebrow">Por que a Novara</p>
      <h2>Mais que uma assessoria, uma parceira na sua jornada</h2>
      <ul class="icon-list">
        <li v-for="reason in reasons" :key="reason.title">
          <component :is="reason.icon" :size="20" :stroke-width="1.5" aria-hidden="true" />
          <div><b>{{ reason.title }}</b><span>{{ reason.text }}</span></div>
        </li>
      </ul>
      <RouterLink class="text-link" to="/sobre">Conheça a Novara <ArrowRight :size="16" aria-hidden="true" /></RouterLink>
    </div>
  </section>
</template>
