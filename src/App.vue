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
