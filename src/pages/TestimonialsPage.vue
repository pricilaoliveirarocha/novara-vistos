<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import PageHeader from '../components/PageHeader.vue'
import StoryCard from '../components/StoryCard.vue'
import CtaBand from '../components/CtaBand.vue'
import { testimonials } from '../testimonials'

const phone = window.matchMedia('(max-width: 820px)')
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
  <PageHeader
    eyebrow="Depoimentos"
    title="Histórias reais"
    accent="de novos destinos."
    lead="Cada cliente tem uma história única. Nosso maior resultado é fazer parte delas."
  />
  <section class="section container">
    <div ref="grid" data-reveal>
      <Transition name="quote" mode="out-in">
        <ul :key="`${page}-${perPage}`" class="story-grid">
          <StoryCard v-for="story in visible" :key="story.name" :story="story" />
        </ul>
      </Transition>
      <nav v-if="pageCount > 1" class="story-pager" aria-label="Páginas de depoimentos">
        <button type="button" aria-label="Depoimentos anteriores" @click="goTo(page - 1)"><ArrowLeft :size="18" aria-hidden="true" /></button>
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
        <button type="button" aria-label="Próximos depoimentos" @click="goTo(page + 1)"><ArrowRight :size="18" aria-hidden="true" /></button>
      </nav>
    </div>
  </section>
  <CtaBand title="O próximo destino" accent="pode ser o seu." message="Olá, quero planejar meu próximo destino." />
</template>
