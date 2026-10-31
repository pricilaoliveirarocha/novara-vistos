<script setup>
import { ArrowRight, FileCheck2, Globe2, ShieldCheck, UsersRound } from 'lucide-vue-next'
import WhatsAppIcon from './WhatsAppIcon.vue'
import { whatsapp } from '../site'

const benefits = [
  { icon: ShieldCheck, text: ['Atendimento', 'especializado'] },
  { icon: Globe2, text: ['Suporte em todo', 'o Brasil'] },
  { icon: FileCheck2, text: ['Processo seguro', 'e sem complicações'] },
  { icon: UsersRound, text: ['Mais de 1.000', 'clientes atendidos'] }
]
</script>

<template>
  <section class="hero">
    <svg class="hero-grid" viewBox="0 0 800 800" aria-hidden="true">
      <g fill="none" stroke="currentColor">
        <circle cx="400" cy="400" r="390" />
        <ellipse cx="400" cy="400" rx="260" ry="390" />
        <ellipse cx="400" cy="400" rx="130" ry="390" />
        <path d="M400 10v780M10 400h780M62 205h676M62 595h676" />
      </g>
    </svg>

    <div class="hero-main">
      <div class="hero-visual">
        <svg width="0" height="0" aria-hidden="true" class="clip-def">
          <clipPath id="hero-wave" clipPathUnits="objectBoundingBox">
            <path d="M.09.2C.27.03.5.22.72.13.84.08.93.05 1 0V1H.02C.13.74-.02.45.09.2Z" />
          </clipPath>
        </svg>
        <div class="hero-photo">
          <picture>
            <img
              src="/images/hero-passaporte.webp"
              srcset="/images/hero-passaporte-mobile.webp 900w, /images/hero-passaporte.webp 1920w"
              sizes="(max-width: 900px) 100vw, 60vw"
              width="1920"
              height="1200"
              fetchpriority="high"
              alt="Mão segurando passaporte brasileiro com cartões de embarque, com o Parlamento de Londres ao pôr do sol"
            >
          </picture>
        </div>
        <p class="hero-note" aria-hidden="true">Novos<br>destinos.<br>Grandes<br>histórias.</p>
      </div>

      <svg class="hero-flight" viewBox="0 0 1440 735" aria-hidden="true">
        <path class="flight-trail" pathLength="1" d="M945 590C900 430 830 325 716 292" />
        <path class="flight-trail flight-trail-b" pathLength="1" d="M990 650C900 500 850 330 716 292" />
        <g class="flight-plane">
          <g transform="translate(690 282) rotate(-78) scale(2.5) translate(-12 -12)">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
          </g>
        </g>
      </svg>

      <div class="container hero-content">
        <p class="eyebrow hero-in" style="--d: .1s">Assessoria de vistos consulares</p>
        <h1 class="hero-in" style="--d: .2s">Seu mundo,<br><em>sem fronteiras.</em></h1>
        <p class="hero-copy hero-in" style="--d: .35s">Cuidamos de todo o processo para você conquistar seus vistos e passaportes com segurança, praticidade e acompanhamento especializado.</p>
        <a class="btn btn-gold hero-in" style="--d: .5s" :href="whatsapp('Olá, quero iniciar minha solicitação de assessoria.')" target="_blank" rel="noopener">
          <WhatsAppIcon /> Fale com um especialista <ArrowRight class="btn-arrow" :size="18" aria-hidden="true" />
        </a>
        <div class="social-proof hero-in" style="--d: .65s">
          <img src="/images/clientes.webp" width="264" height="108" alt="">
          <p><strong>+ de 1.000 clientes atendidos</strong><br>em todo o Brasil</p>
        </div>
      </div>
    </div>

    <div class="benefits">
      <ul class="container benefits-grid" aria-label="Diferenciais da Novara">
        <li v-for="(benefit, index) in benefits" :key="benefit.text[0]" data-reveal :style="{ '--d': `${index * 0.08}s` }">
          <component :is="benefit.icon" :size="32" :stroke-width="1.3" aria-hidden="true" />
          <p>{{ benefit.text[0] }}<br>{{ benefit.text[1] }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
