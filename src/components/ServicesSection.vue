<script setup>
const services = [
  { title: 'Visto Americano', text: 'Turismo, negócios, estudos e intercâmbio.', pos: '0%' },
  { title: 'Visto Canadense', text: 'Turismo, estudos, trabalho e residência.', pos: '33.333%' },
  { title: 'Visto de Estudante', text: 'Orientação completa para estudar no exterior.', pos: '66.666%' },
  { title: 'Passaportes', text: 'Solicitação e renovação com suporte especializado.', pos: '100%' }
]
</script>

<template>
  <section id="servicos" class="section services">
    <div class="container" data-reveal>
      <div class="section-heading split-heading">
        <div><p class="eyebrow eyebrow-dark">Nossos serviços</p><h2>Assessoria para cada destino.</h2></div>
        <p>Vistos, passaportes e documentação internacional com suporte especializado em todas as etapas.</p>
      </div>
      <div class="service-grid">
        <article v-for="service in services" :key="service.title" class="service-card">
          <div class="service-photo" :style="{ backgroundPosition: service.pos + ' center' }" role="img" :aria-label="service.title"></div>
          <div class="service-body"><span class="round-icon">✦</span><h3>{{ service.title }}</h3><p>{{ service.text }}</p><a href="#planos" :aria-label="`Conhecer assessoria para ${service.title}`">→</a></div>
        </article>
      </div>
    </div>
  </section>
</template>
