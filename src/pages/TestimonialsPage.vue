<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ArrowLeft, ArrowRight, Star } from 'lucide-vue-next'
import ClientAvatar from '../components/ClientAvatar.vue'
import FlagIcon from '../components/FlagIcon.vue'
import MapCta from '../components/MapCta.vue'
import { testimonials } from '../testimonials'

const phone = window.matchMedia('(max-width: 620px)')
const perPage = ref(phone.matches ? 3 : 6)
const page = ref(0)
const grid = ref(null)

const pageCount = computed(() => Math.ceil(testimonials.length / perPage.value))
const visible = computed(() => testimonials.slice(page.value * perPage.value, (page.value + 1) * perPage.value))

const goTo = (target) => {
  page.value = (target + pageCount.value) % pageCount.value
  grid.value?.scrollIntoView({ block: 'nearest' })
}

const onResize = () => { perPage.value = phone.matches ? 3 : 6 }

onMounted(() => phone.addEventListener('change', onResize))
onBeforeUnmount(() => phone.removeEventListener('change', onResize))
watch(perPage, () => { page.value = 0 })
</script>

<template>
  <section class="page-hero stories-hero">
    <div class="hero-visual">
      <div class="hero-photo">
        <img src="/images/depoimentos-topo.webp" width="1400" height="1024" alt="Viajante olhando pela janela do aeroporto para um avião ao pôr do sol">
      </div>
      <p class="hero-note" aria-hidden="true">Novos<br>destinos.<br>Grandes<br>histórias.</p>
    </div>
    <svg class="hero-flight" viewBox="0 0 1440 540" aria-hidden="true">
      <path class="flight-trail" pathLength="1" d="M860 540C850 390 800 280 706 226" />
      <g class="flight-plane">
        <g transform="translate(680 210) rotate(-78) scale(2.5) translate(-12 -12)">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        </g>
      </g>
    </svg>
    <div class="container page-hero-content">
      <p class="eyebrow hero-in" style="--d: .05s">Depoimentos</p>
      <h1 class="hero-in" style="--d: .14s">Histórias reais<br><em>de novos destinos.</em></h1>
      <p class="hero-copy hero-in" style="--d: .26s">Cada cliente tem uma história única. Nosso maior resultado é fazer parte delas.</p>
    </div>
  </section>

  <section class="section paper stories">
    <div class="container">
      <div class="split-heading" data-reveal>
        <div>
          <p class="eyebrow eyebrow-dark">Depoimentos</p>
          <h2>O que nossos clientes <em>dizem.</em></h2>
        </div>
        <p>Confiança, segurança e suporte em todas as etapas do processo. Veja experiências de quem já viajou com a Novara Vistos.</p>
      </div>
    </div>
    <div ref="grid" class="container container-stories" data-reveal style="--d: .1s">
      <Transition name="quote" mode="out-in">
        <ul :key="`${page}-${perPage}`" class="story-grid">
          <li v-for="story in visible" :key="story.name" class="story-card">
            <div class="story-top">
              <ClientAvatar :name="story.name" :photo="story.photo" />
              <span class="stars" role="img" :aria-label="`Avaliação: ${story.rating} de 5 estrelas`">
                <Star v-for="n in story.rating" :key="n" :size="16" fill="currentColor" stroke="none" aria-hidden="true" />
              </span>
              <span class="story-mark" aria-hidden="true">”</span>
            </div>
            <blockquote>“{{ story.quote }}”</blockquote>
            <footer>
              <strong>{{ story.name }}</strong>
              <span v-if="story.visa" class="story-visa">
                <FlagIcon v-if="story.country" :country="story.country" />
                {{ story.visa }}
              </span>
            </footer>
          </li>
        </ul>
      </Transition>
      <nav v-if="pageCount > 1" class="story-pager" aria-label="Páginas de depoimentos">
        <button type="button" aria-label="Depoimentos anteriores" @click="goTo(page - 1)"><ArrowLeft :size="20" aria-hidden="true" /></button>
        <span class="story-dots">
          <button
            v-for="n in pageCount"
            :key="n"
            type="button"
            :class="{ active: page === n - 1 }"
            :aria-label="`Página ${n} de ${pageCount}`"
            :aria-current="page === n - 1 ? 'true' : undefined"
            @click="goTo(n - 1)"
          ></button>
        </span>
        <button type="button" aria-label="Próximos depoimentos" @click="goTo(page + 1)"><ArrowRight :size="20" aria-hidden="true" /></button>
      </nav>
    </div>
  </section>

  <MapCta
    eyebrow="Vamos planejar o seu?"
    lead="Fale com um especialista e receba uma orientação personalizada para o seu caso."
    message="Olá, quero planejar meu próximo destino."
  >O próximo destino<br>pode ser o seu.</MapCta>
</template>
