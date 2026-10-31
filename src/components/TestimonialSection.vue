<script setup>
import { computed, ref } from 'vue'
import { ArrowLeft, ArrowRight, Star } from 'lucide-vue-next'

// Para adicionar depoimentos, inclua novos itens: as setas aparecem a partir do segundo.
const testimonials = [
  {
    quote: 'Atendimento impecável, esclareceram todas as minhas dúvidas e me acompanharam em cada etapa. Consegui meu visto sem complicações!',
    name: 'Mariana Silva',
    detail: 'Visto Americano – Turismo',
    photo: '/images/depoimento-mariana.webp'
  }
]

const index = ref(0)
const current = computed(() => testimonials[index.value])
const move = (step) => { index.value = (index.value + step + testimonials.length) % testimonials.length }
</script>

<template>
  <section class="testimonials">
    <svg class="testimonial-route" viewBox="0 0 400 300" aria-hidden="true">
      <path d="M-10 290C90 240 180 150 270 40" />
      <path class="route-plane" transform="translate(262 30) rotate(-5) scale(1.3)" d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
    <div class="stamps" aria-hidden="true">
      <span class="stamp stamp-a">VISA<small>Approved</small></span>
      <span class="stamp stamp-b">ARRIVAL<small>Arrival</small></span>
    </div>
    <div class="container testimonial-grid">
      <div data-reveal>
        <p class="eyebrow">Depoimentos</p>
        <h2>Histórias reais<br>de novos destinos.</h2>
        <div v-if="testimonials.length > 1" class="testimonial-controls">
          <button type="button" aria-label="Depoimento anterior" @click="move(-1)"><ArrowLeft :size="18" aria-hidden="true" /></button>
          <button type="button" aria-label="Próximo depoimento" @click="move(1)"><ArrowRight :size="18" aria-hidden="true" /></button>
        </div>
      </div>
      <div class="testimonial-stage" data-reveal style="--d: .15s" aria-live="polite">
        <Transition name="quote" mode="out-in">
          <figure :key="current.name" class="testimonial">
            <span class="quote-mark" aria-hidden="true">“</span>
            <blockquote>“{{ current.quote }}”</blockquote>
            <figcaption>
              <img :src="current.photo" width="64" height="64" alt="" loading="lazy">
              <span>
                <strong>{{ current.name }}</strong>
                <small>{{ current.detail }}</small>
                <span class="stars" role="img" aria-label="Avaliação: 5 estrelas">
                  <Star v-for="n in 5" :key="n" :size="15" fill="currentColor" stroke="none" aria-hidden="true" />
                </span>
              </span>
            </figcaption>
          </figure>
        </Transition>
      </div>
    </div>
  </section>
</template>
