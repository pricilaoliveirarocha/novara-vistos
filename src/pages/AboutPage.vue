<script setup>
import { reactive } from 'vue'
import { Award, Globe2, ShieldCheck, UsersRound } from 'lucide-vue-next'
import MapCta from '../components/MapCta.vue'

const values = [
  { icon: UsersRound, title: 'Atendimento personalizado', text: 'Entendemos sua necessidade e indicamos o melhor caminho.' },
  { icon: ShieldCheck, title: 'Segurança no processo', text: 'Orientação clara e suporte especializado em todas as etapas.' },
  { icon: Globe2, title: 'Suporte do início ao fim', text: 'Acompanhamos você até o resultado final, com praticidade e tranquilidade.' },
  { icon: Award, title: 'Compromisso com o seu destino', text: 'Buscamos sempre o melhor resultado, com seriedade, responsabilidade e atenção aos detalhes.' }
]

const team = [
  { name: 'Wander Karasek', role: 'CEO & Consultor', photo: 'equipe-wander', initials: 'WK', text: 'Especialista em processos consulares e com ampla experiência em assessoria internacional, lidera a Novara Vistos com foco em resultados e na satisfação dos clientes.' },
  { name: 'Pricila Oliveira', role: 'Atendimento & Social Media', photo: 'equipe-pricila', initials: 'PO', text: 'Responsável pelo atendimento e pelas redes sociais da Novara, acompanha cada etapa do processo com clareza, organização e proximidade com os nossos clientes.' }
]

// Enquanto a foto não existir em public/images, o card mostra as iniciais.
const missingPhotos = reactive({})
</script>

<template>
  <div class="about-band">
    <div class="about-band-photo">
      <img src="/images/sobre-topo.webp" width="2012" height="504" fetchpriority="high" alt="Passaporte brasileiro sobre uma mala, diante da janela de um aeroporto ao pôr do sol">
    </div>
  </div>

  <section class="paper about">
    <div class="container about-intro">
      <div>
        <p class="eyebrow eyebrow-dark hero-in" style="--d: .1s">Quem somos</p>
        <h1 class="hero-in" style="--d: .2s">Mais que vistos,<br><em>conectamos histórias.</em></h1>
        <p class="about-lead hero-in" style="--d: .32s">A Novara Vistos é uma assessoria consular especializada em vistos, passaportes e autorizações internacionais. Simplificamos processos e oferecemos orientação personalizada em cada etapa, para que você viaje com tranquilidade e segurança.</p>
      </div>
      <div class="about-photo hero-in" style="--d: .3s">
        <img src="/images/sobre-londres.webp" width="646" height="510" alt="Viajante de costas admirando o Big Ben ao pôr do sol">
      </div>
    </div>
    <ul class="container about-values">
      <li v-for="(value, index) in values" :key="value.title" data-reveal :style="{ '--d': `${index * 0.1}s` }">
        <span class="about-icon"><component :is="value.icon" :size="26" :stroke-width="1.3" aria-hidden="true" /></span>
        <h2>{{ value.title }}</h2>
        <p>{{ value.text }}</p>
      </li>
    </ul>
  </section>

  <section class="team paper">
    <div class="container">
      <div class="split-heading" data-reveal>
        <div>
          <p class="eyebrow eyebrow-dark">Nossa equipe</p>
          <h2>Experiência<br><em>ao seu lado.</em></h2>
        </div>
        <p>Contamos com uma equipe dedicada e experiente, pronta para oferecer o suporte que você precisa em cada etapa do seu processo, com atendimento humanizado e foco no seu objetivo.</p>
      </div>
    </div>
    <div class="container team-grid">
      <article v-for="(person, index) in team" :key="person.name" class="team-card" data-reveal :style="{ '--d': `${index * 0.12}s` }">
        <div class="team-photo">
          <span v-if="missingPhotos[person.photo]" class="team-initials" aria-hidden="true">{{ person.initials }}</span>
          <img v-else :src="`/images/${person.photo}.webp`" :alt="`Foto de ${person.name}`" width="640" height="640" loading="lazy" @error="missingPhotos[person.photo] = true">
        </div>
        <div class="team-body">
          <h3>{{ person.name }}</h3>
          <p class="team-role">{{ person.role }}</p>
          <p>{{ person.text }}</p>
        </div>
      </article>
    </div>
  </section>

  <MapCta
    eyebrow="Pronto para o seu próximo destino?"
    lead="Tire suas dúvidas e receba uma orientação personalizada para o seu caso."
    message="Olá, quero uma orientação personalizada sobre vistos."
  >Fale com um especialista.</MapCta>
</template>
