<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
import FlagIcon from './FlagIcon.vue'
import { whatsapp } from '../site'

const features = ['Preenchimento de formulários', 'Agendamento da entrevista', 'Orientação para a entrevista', 'Acompanhamento até o resultado']

const plans = [
  { country: 'us', name: 'Visto Americano', price: 'R$ 1.490' },
  { country: 'ca', name: 'Visto Canadense', price: 'R$ 1.690' }
]
</script>

<template>
  <section id="planos" class="section container">
    <div class="section-head" data-reveal>
      <h2>Planos de assessoria</h2>
      <p>Escolha o destino e conte com nosso suporte do início ao fim do processo.</p>
    </div>
    <div class="plan-grid">
      <article v-for="(plan, index) in plans" :key="plan.name" class="card plan-card" data-reveal :style="{ '--d': `${index * 0.08}s` }">
        <div class="plan-title">
          <FlagIcon :country="plan.country" />
          <div>
            <h3>{{ plan.name }}</h3>
            <small>Assessoria completa</small>
          </div>
        </div>
        <p class="plan-price">A partir de <strong>{{ plan.price }}</strong> em até 6x sem juros</p>
        <ul class="check-list">
          <li v-for="feature in features" :key="feature"><Check :size="16" :stroke-width="2" aria-hidden="true" />{{ feature }}</li>
        </ul>
        <a class="btn btn-primary" :href="whatsapp(`Olá, quero contratar a assessoria para o ${plan.name}.`)" target="_blank" rel="noopener">
          Quero meu visto <ArrowRight class="btn-arrow" :size="17" aria-hidden="true" />
        </a>
      </article>
    </div>
    <p class="disclaimer">A Novara Vistos é uma assessoria privada, sem vínculo com consulados ou órgãos de governo. A decisão sobre a concessão de vistos e passaportes é exclusiva das autoridades competentes, e as taxas oficiais não estão incluídas nos valores da assessoria.</p>
  </section>
</template>
