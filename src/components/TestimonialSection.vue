<script setup>
import { ref } from 'vue'

const revision = ref(0)
const replay = () => { revision.value += 1 }
</script>

<template>
  <section id="depoimentos" class="testimonial-section">
    <div class="testimonial-stamps" aria-hidden="true">VISA · ARRIVAL · BOARDING</div>
    <div class="container testimonial-grid" data-reveal>
      <div class="testimonial-heading">
        <p class="eyebrow">Depoimentos</p>
        <h2>Histórias reais<br>de novos destinos.</h2>
        <div class="testimonial-controls" aria-label="Controles do depoimento">
          <button type="button" aria-label="Depoimento anterior" @click="replay">←</button>
          <button type="button" aria-label="Próximo depoimento" @click="replay">→</button>
        </div>
      </div>
      <blockquote :key="revision" class="testimonial-card" aria-live="polite">
        <span class="quote-mark" aria-hidden="true">“</span>
        <p>Atendimento impecável, esclareceram todas as minhas dúvidas e me acompanharam em cada etapa. Consegui meu visto sem complicações!</p>
        <footer class="testimonial-author">
          <img src="/images/depoimento-marina.webp" width="58" height="58" alt="Marina Silva, cliente de assessoria para visto americano" loading="lazy">
          <span><strong>Marina Silva</strong><small>Visto Americano — Turismo</small><i aria-label="5 estrelas">★★★★★</i></span>
        </footer>
      </blockquote>
    </div>
  </section>
</template>
