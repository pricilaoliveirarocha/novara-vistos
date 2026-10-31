<script setup>
import { reactive } from 'vue'
import { Award, Globe2, ShieldCheck, UsersRound } from 'lucide-vue-next'
import PageHeader from '../components/PageHeader.vue'
import CtaBand from '../components/CtaBand.vue'

const values = [
  { icon: UsersRound, title: 'Atendimento personalizado', text: 'Entendemos sua necessidade e indicamos o melhor caminho.' },
  { icon: ShieldCheck, title: 'Segurança no processo', text: 'Orientação clara e suporte especializado em todas as etapas.' },
  { icon: Globe2, title: 'Suporte do início ao fim', text: 'Acompanhamos você até o resultado final, com praticidade.' },
  { icon: Award, title: 'Compromisso com o seu destino', text: 'Seriedade, responsabilidade e atenção aos detalhes.' }
]

const team = [
  { name: 'Wander Karasek', role: 'CEO & Consultor', photo: 'equipe-wander', initials: 'WK', text: 'Especialista em processos consulares e com ampla experiência em assessoria internacional, lidera a Novara Vistos com foco em resultados e na satisfação dos clientes.' },
  { name: 'Pricila Oliveira', role: 'Atendimento & Social Media', photo: 'equipe-pricila', initials: 'PO', text: 'Responsável pelo atendimento e pelas redes sociais da Novara, acompanha cada etapa do processo com clareza, organização e proximidade com os nossos clientes.' }
]

// Enquanto a foto não existir em public/images, o card mostra as iniciais.
const missingPhotos = reactive({})
</script>

<template>
  <PageHeader
    eyebrow="Quem somos"
    title="Mais que vistos,"
    accent="conectamos histórias."
    lead="A Novara Vistos é uma assessoria consular especializada em vistos, passaportes e autorizações internacionais. Simplificamos processos para que você viaje com tranquilidade e segurança."
  />

  <div class="container section">
    <div class="wide-photo" data-reveal>
      <img
        src="/images/aeroporto-cta.webp"
        srcset="/images/aeroporto-cta-mobile.webp 900w, /images/aeroporto-cta.webp 1920w"
        sizes="(max-width: 1248px) 100vw, 1200px"
        width="1920"
        height="702"
        alt="Viajante com mala aguardando o voo em um aeroporto ao pôr do sol"
      >
    </div>
  </div>

  <section class="container value-section" aria-label="Nossos valores">
    <ul class="value-grid">
      <li v-for="(value, index) in values" :key="value.title" class="card value-card" data-reveal :style="{ '--d': `${index * 0.07}s` }">
        <component :is="value.icon" :size="22" :stroke-width="1.5" aria-hidden="true" />
        <h3>{{ value.title }}</h3>
        <p>{{ value.text }}</p>
      </li>
    </ul>
  </section>

  <section class="section container">
    <div class="section-head" data-reveal>
      <h2>Nossa equipe</h2>
      <p>Atendimento humanizado e foco no seu objetivo, em cada etapa do processo.</p>
    </div>
    <div class="team-grid">
      <article v-for="(person, index) in team" :key="person.name" class="card team-card" data-reveal :style="{ '--d': `${index * 0.08}s` }">
        <div class="team-photo">
          <span v-if="missingPhotos[person.photo]" aria-hidden="true">{{ person.initials }}</span>
          <img v-else :src="`/images/${person.photo}.webp`" :alt="`Foto de ${person.name}`" width="208" height="208" loading="lazy" @error="missingPhotos[person.photo] = true">
        </div>
        <div>
          <h3>{{ person.name }}</h3>
          <p class="team-role">{{ person.role }}</p>
          <p>{{ person.text }}</p>
        </div>
      </article>
    </div>
  </section>

  <CtaBand />
</template>
