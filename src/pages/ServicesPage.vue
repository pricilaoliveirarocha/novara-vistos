<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
import PageHeader from '../components/PageHeader.vue'
import PlansSection from '../components/PlansSection.vue'
import CtaBand from '../components/CtaBand.vue'
import { whatsapp } from '../site'

const details = [
  { id: 'visto-americano', title: 'Visto Americano', image: 'servico-eua', alt: 'Estátua da Liberdade com o horizonte de Nova York', position: '40% 40%', text: 'Para quem vai aos Estados Unidos a turismo, negócios, estudos ou intercâmbio.', items: ['Preenchimento de formulários', 'Agendamento da entrevista', 'Orientação para a entrevista', 'Acompanhamento até o resultado'] },
  { id: 'visto-canadense', title: 'Visto Canadense', image: 'servico-canada', alt: 'Bandeira do Canadá e o horizonte de Toronto', position: '60% 40%', text: 'Para quem planeja ir ao Canadá a turismo, estudos, trabalho ou residência.', items: ['Análise do seu perfil e objetivo', 'Preenchimento de formulários', 'Organização da documentação', 'Acompanhamento até o resultado'] },
  { id: 'visto-estudante', title: 'Visto de Estudante', image: 'servico-estudante', alt: 'Estudante caminhando por uma cidade universitária histórica', position: '50% 55%', text: 'Orientação completa para estudar no exterior com tudo em ordem.', items: ['Orientação sobre o tipo de visto', 'Organização da documentação', 'Preparação para as etapas consulares', 'Acompanhamento até o resultado'] },
  { id: 'passaportes', title: 'Passaportes', image: 'servico-passaporte', alt: 'Passaporte brasileiro sobre uma mesa de mármore', position: '50% 65%', text: 'Suporte para solicitar ou renovar o seu passaporte com praticidade.', items: ['Orientação sobre solicitação e renovação', 'Conferência da documentação', 'Apoio no agendamento', 'Acompanhamento do processo'] }
]
</script>

<template>
  <PageHeader
    eyebrow="Nossos serviços"
    title="Assessoria para"
    accent="cada destino."
    lead="Vistos, passaportes e documentação internacional com suporte especializado em todas as etapas."
  />
  <section class="section container">
    <article v-for="service in details" :id="service.id" :key="service.id" class="detail-row" data-reveal>
      <div class="detail-photo">
        <img :src="`/images/${service.image}.webp`" :alt="service.alt" :style="{ objectPosition: service.position }" width="515" height="758" loading="lazy">
      </div>
      <div>
        <h2>{{ service.title }}</h2>
        <p>{{ service.text }}</p>
        <ul class="check-list">
          <li v-for="item in service.items" :key="item"><Check :size="16" :stroke-width="2" aria-hidden="true" />{{ item }}</li>
        </ul>
        <a class="text-link" :href="whatsapp(`Olá, quero saber mais sobre: ${service.title}.`)" target="_blank" rel="noopener">
          Falar sobre {{ service.title }} <ArrowRight :size="16" aria-hidden="true" />
        </a>
      </div>
    </article>
  </section>
  <PlansSection />
  <CtaBand />
</template>
