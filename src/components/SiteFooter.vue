<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronUp, Mail } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { email, navLinks, phoneLabel, whatsapp } from '../site'

const year = new Date().getFullYear()
const expanded = ref(false)
const close = () => { expanded.value = false }
</script>

<template>
  <footer class="site-footer">
    <div id="footer-more" :class="['footer-more', { open: expanded }]">
      <div class="container footer-more-inner">
        <nav class="footer-more-nav" aria-label="Navegação do rodapé">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" @click="close">{{ link.label }}</RouterLink>
        </nav>
        <p class="footer-legal">
          © {{ year }} Novara Vistos. Todos os direitos reservados.
          <a :href="`mailto:${email}?subject=Política de Privacidade`">Política de Privacidade</a>
          <a :href="`mailto:${email}?subject=Termos de Uso`">Termos de Uso</a>
        </p>
      </div>
    </div>
    <div class="container footer-bar">
      <RouterLink class="brand" to="/" aria-label="Novara Vistos, início" @click="close">
        <img src="/images/logo-novara.webp" width="56" height="49" alt="" loading="lazy">
        <span><b>NOVARA</b><small>VISTOS</small></span>
      </RouterLink>
      <div class="footer-center">
        <nav aria-label="Atalhos do rodapé">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
        </nav>
        <p class="footer-motto">Seu mundo, sem fronteiras.</p>
      </div>
      <div class="footer-actions">
        <a :href="whatsapp()" target="_blank" rel="noopener" :aria-label="`WhatsApp ${phoneLabel}`"><WhatsAppIcon /></a>
        <a :href="`mailto:${email}`" :aria-label="`E-mail ${email}`"><Mail :size="20" aria-hidden="true" /></a>
        <button type="button" :class="{ flipped: expanded }" :aria-expanded="expanded" aria-controls="footer-more" :aria-label="expanded ? 'Recolher rodapé' : 'Expandir rodapé'" @click="expanded = !expanded">
          <ChevronUp :size="20" aria-hidden="true" />
        </button>
      </div>
    </div>
  </footer>
</template>
