<script setup>
import { ref } from 'vue'

const open = ref(false)
const close = () => { open.value = false }
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#inicio" aria-label="Novara Vistos — início">
        <img class="brand-logo" src="/images/logo-novara.webp" width="54" height="48" alt="" aria-hidden="true">
        <span><b>NOVARA</b><small>VISTOS</small></span>
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="open" aria-controls="main-nav" @click="open = !open">
        <span></span><span></span><span></span><span class="sr-only">Abrir menu</span>
      </button>
      <nav id="main-nav" :class="['main-nav', { open }]" aria-label="Navegação principal">
        <a href="#inicio" @click="close">Início</a>
        <a href="#sobre" @click="close">Sobre</a>
        <a href="#servicos" @click="close">Serviços</a>
        <a href="#diferenciais" @click="close">Diferenciais</a>
        <a href="#contato" @click="close">Contato</a>
      </nav>
      <a class="btn btn-outline header-cta" href="https://wa.me/5521982256381?text=Olá%2C%20quero%20falar%20com%20um%20especialista%20em%20vistos." target="_blank" rel="noopener">Fale com um especialista</a>
    </div>
  </header>
</template>
