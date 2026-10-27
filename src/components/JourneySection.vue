<script setup>
const steps = [
  { icon: '◌', title: 'Fale conosco', text: 'Tire suas dúvidas com um especialista.' },
  { icon: '▤', title: 'Análise do caso', text: 'Avaliamos seu perfil e orientamos o melhor caminho.' },
  { icon: '▱', title: 'Preparação da documentação', text: 'Cuidamos da documentação com atenção e organização.' },
  { icon: '✈', title: 'Visto em mãos', text: 'Acompanhamos você até o resultado final.' }
]
</script>

<template>
  <section id="sobre" class="section journey paper-bg">
    <div class="container" data-reveal>
      <p class="eyebrow eyebrow-dark">Como funciona</p>
      <h2>Sua jornada começa aqui.</h2>
      <p class="section-lead">Do primeiro contato ao seu visto em mãos, nós cuidamos de cada detalhe.</p>
      <div class="journey-grid">
        <article v-for="(step, index) in steps" :key="step.title" class="step-card">
          <div class="step-top"><span class="step-number">0{{ index + 1 }}</span><span class="step-icon">{{ step.icon }}</span></div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
