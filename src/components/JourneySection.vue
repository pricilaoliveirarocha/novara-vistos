<script setup>
const steps = [
  { title: 'Fale conosco', text: 'Tire suas dúvidas com um especialista.' },
  { title: 'Análise do caso', text: 'Avaliamos o seu perfil e orientamos o melhor caminho.' },
  { title: 'Documentação', text: 'Cuidamos de toda a preparação com atenção e segurança.' },
  { title: 'Visto em mãos', text: 'Acompanhamos até o resultado final.' }
]
</script>

<template>
  <section class="journey">
    <div class="container">
      <div class="journey-head" data-reveal>
        <p class="eyebrow">Como funciona</p>
        <h2 class="title-large">Sua jornada começa aqui.</h2>
      </div>
      <ol class="step-grid">
        <li v-for="(step, index) in steps" :key="step.title" class="step" data-reveal :style="{ '--d': `${index * 0.1}s` }">
          <span class="step-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
