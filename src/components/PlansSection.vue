<script setup>
const plans = [
  { flag: '🇺🇸', name: 'Visto Americano', price: 'Solicite uma análise', image: '0%' },
  { flag: '🇨🇦', name: 'Visto Canadense', price: 'Solicite uma análise', image: '33.333%' }
]
</script>

<template>
  <section id="planos" class="section plans">
    <div class="container" data-reveal>
      <div class="split-heading plans-heading"><div><p class="eyebrow">Assessoria completa</p><h2>Planos de Assessoria</h2></div><p>Escolha o destino e conte com nosso suporte especializado do início ao fim do processo.</p></div>
      <div class="plan-grid">
        <article v-for="plan in plans" :key="plan.name" class="plan-card">
          <div class="plan-photo" :style="{ backgroundPosition: plan.image + ' center' }" role="img" :aria-label="plan.name"></div>
          <div class="plan-info">
            <h3><span>{{ plan.flag }}</span>{{ plan.name }}</h3>
            <small>Assessoria completa</small>
            <ul><li>Preenchimento de formulários</li><li>Agendamento de entrevista</li><li>Orientação para a entrevista</li><li>Acompanhamento até o resultado</li></ul>
          </div>
          <div class="plan-action"><small>{{ plan.price }}</small><a class="btn btn-gold" href="https://wa.me/5521982256381?text=Olá%2C%20quero%20saber%20mais%20sobre%20os%20planos%20de%20assessoria." target="_blank" rel="noopener">Quero meu visto →</a></div>
        </article>
      </div>
    </div>
  </section>
</template>
