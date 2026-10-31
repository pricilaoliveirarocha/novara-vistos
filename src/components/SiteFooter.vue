<script setup>
import { Mail } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { email, phoneLabel, whatsapp } from '../site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-bar">
      <p>© {{ year }} Novara Vistos</p>
      <nav aria-label="Rodapé">
        <a :href="`mailto:${email}?subject=Política de Privacidade`">Privacidade</a>
        <a :href="`mailto:${email}?subject=Termos de Uso`">Termos</a>
        <a class="footer-icon" :href="whatsapp()" target="_blank" rel="noopener" :aria-label="`WhatsApp ${phoneLabel}`"><WhatsAppIcon /></a>
        <a class="footer-icon" :href="`mailto:${email}`" :aria-label="`E-mail ${email}`"><Mail :size="20" aria-hidden="true" /></a>
      </nav>
    </div>
  </footer>
</template>
