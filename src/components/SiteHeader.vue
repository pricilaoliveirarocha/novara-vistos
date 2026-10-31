<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, Menu, X } from 'lucide-vue-next'
import { navLinks, whatsapp } from '../site'

const open = ref(false)
const scrolled = ref(false)
const close = () => { open.value = false }
const onScroll = () => { scrolled.value = window.scrollY > 8 }
const onKeydown = (event) => { if (event.key === 'Escape') close() }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})

watch(open, (isOpen) => document.body.classList.toggle('menu-open', isOpen))
</script>

<template>
  <header :class="['site-header', { 'is-scrolled': scrolled }]">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" aria-label="Novara Vistos, início" @click="close">
        <img src="/images/logo-novara.webp" width="44" height="39" alt="">
        <span><b>Novara</b><small>VISTOS</small></span>
      </RouterLink>
      <nav id="main-nav" :class="['main-nav', { open }]" aria-label="Navegação principal">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" exact-active-class="active" @click="close">{{ link.label }}</RouterLink>
      </nav>
      <a class="btn btn-primary btn-small header-cta" :href="whatsapp('Olá, quero falar com um especialista em vistos.')" target="_blank" rel="noopener">
        Fale com especialista <ArrowRight class="btn-arrow" :size="16" aria-hidden="true" />
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="open" aria-controls="main-nav" :aria-label="open ? 'Fechar menu' : 'Abrir menu'" @click="open = !open">
        <X v-if="open" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>
  </header>
</template>
