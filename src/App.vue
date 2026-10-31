<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

let observer

// Roda a cada troca de página, pois os elementos animados são recriados.
const watchReveals = () => {
  document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => observer?.observe(el))
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  watchReveals()
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <svg width="0" height="0" aria-hidden="true" class="clip-def">
    <clipPath id="hero-wave" clipPathUnits="objectBoundingBox">
      <path d="M.09.2C.27.03.5.22.72.13.84.08.93.05 1 0V1H.02C.13.74-.02.45.09.2Z" />
    </clipPath>
  </svg>
  <SiteHeader />
  <RouterView v-slot="{ Component, route }">
    <Transition name="page" mode="out-in" @enter="watchReveals">
      <main :key="route.path">
        <component :is="Component" @vue:mounted="watchReveals" />
      </main>
    </Transition>
  </RouterView>
  <SiteFooter />
</template>
