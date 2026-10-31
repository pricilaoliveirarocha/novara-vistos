<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
import FlagIcon from './FlagIcon.vue'
import { whatsapp } from '../site'

const features = ['Preenchimento de formulários', 'Agendamento da entrevista', 'Orientação para a entrevista', 'Acompanhamento até o resultado']

const plans = [
  { country: 'us', name: 'Visto Americano', price: '1.490', image: 'servico-eua', alt: 'Estátua da Liberdade', position: '26% 30%' },
  { country: 'ca', name: 'Visto Canadense', price: '1.690', image: 'servico-canada', alt: 'Torre CN em Toronto', position: '32% 30%' }
]
</script>

<template>
  <section id="planos" class="section plans">
    <div class="container">
      <div class="split-heading" data-reveal>
        <div>
          <p class="eyebrow">Assessoria completa</p>
          <h2>Planos de Assessoria</h2>
        </div>
        <p>Escolha o destino e conte com nosso suporte especializado do início ao fim do processo.</p>
      </div>
    </div>
    <div class="container container-wide plan-grid">
      <article v-for="(plan, index) in plans" :key="plan.name" class="plan-card" data-reveal :style="{ '--d': `${index * 0.12}s` }">
        <div class="plan-photo">
          <img :src="`/images/${plan.image}.webp`" :alt="plan.alt" :style="{ objectPosition: plan.position }" width="640" height="948" loading="lazy">
        </div>
        <div class="plan-info">
          <div class="plan-title">
            <FlagIcon :country="plan.country" />
            <div>
              <h3>{{ plan.name }}</h3>
              <small>Assessoria completa</small>
            </div>
          </div>
          <ul>
            <li v-for="feature in features" :key="feature"><Check :size="13" :stroke-width="2.5" aria-hidden="true" />{{ feature }}</li>
          </ul>
        </div>
        <div class="plan-action">
          <span>A partir de</span>
          <strong><small>R$</small> {{ plan.price }}</strong>
          <span>em até 6x sem juros</span>
          <a class="btn btn-gold btn-small" :href="whatsapp(`Olá, quero contratar a assessoria para o ${plan.name}.`)" target="_blank" rel="noopener">
            Quero meu visto <ArrowRight class="btn-arrow" :size="16" aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
