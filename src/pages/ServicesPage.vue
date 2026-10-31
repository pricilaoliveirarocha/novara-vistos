<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
import PageHero from '../components/PageHero.vue'
import PlansSection from '../components/PlansSection.vue'
import CtaSection from '../components/CtaSection.vue'
import { whatsapp } from '../site'

const details = [
  { id: 'visto-americano', title: 'Visto Americano', image: 'servico-eua', alt: 'Estátua da Liberdade com o horizonte de Nova York', position: '40% 40%', text: 'Assessoria para quem vai aos Estados Unidos a turismo, negócios, estudos ou intercâmbio.', items: ['Preenchimento de formulários', 'Agendamento da entrevista', 'Orientação para a entrevista', 'Acompanhamento até o resultado'] },
  { id: 'visto-canadense', title: 'Visto Canadense', image: 'servico-canada', alt: 'Bandeira do Canadá e o horizonte de Toronto', position: '60% 40%', text: 'Suporte para quem planeja ir ao Canadá a turismo, estudos, trabalho ou residência.', items: ['Análise do seu perfil e objetivo', 'Preenchimento de formulários', 'Organização da documentação', 'Acompanhamento até o resultado'] },
  { id: 'visto-estudante', title: 'Visto de Estudante', image: 'servico-estudante', alt: 'Estudante caminhando por uma cidade universitária histórica', position: '50% 50%', text: 'Orientação completa para quem vai estudar no exterior e quer viajar com tudo em ordem.', items: ['Orientação sobre o tipo de visto', 'Organização da documentação', 'Preparação para as etapas consulares', 'Acompanhamento até o resultado'] },
  { id: 'passaportes', title: 'Passaportes', image: 'servico-passaporte', alt: 'Passaporte brasileiro sobre uma mesa de mármore', position: '50% 60%', text: 'Suporte especializado para solicitar ou renovar o seu passaporte com praticidade.', items: ['Orientação sobre solicitação e renovação', 'Conferência da documentação', 'Apoio no agendamento', 'Acompanhamento do processo'] }
]
</script>

<template>
  <PageHero
    eyebrow="Nossos serviços"
    title="Assessoria para"
    accent="cada destino."
    lead="Vistos, passaportes e documentação internacional com suporte especializado em todas as etapas."
    image="servico-canada"
    position="50% 32%"
  />
  <section class="section paper service-details">
    <div class="container">
      <article v-for="service in details" :id="service.id" :key="service.id" class="detail-row" data-reveal>
        <div class="detail-photo">
          <img :src="`/images/${service.image}.webp`" :alt="service.alt" :style="{ objectPosition: service.position }" width="640" height="948" loading="lazy">
        </div>
        <div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.text }}</p>
          <ul>
            <li v-for="item in service.items" :key="item"><Check :size="16" :stroke-width="2.5" aria-hidden="true" />{{ item }}</li>
          </ul>
          <a class="text-link" :href="whatsapp(`Olá, quero saber mais sobre: ${service.title}.`)" target="_blank" rel="noopener">
            Falar sobre {{ service.title }} <ArrowRight :size="17" aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  </section>
  <PlansSection />
  <section class="disclaimer paper">
    <p class="container">A Novara Vistos é uma assessoria privada, sem vínculo com consulados ou órgãos de governo. A decisão sobre a concessão de vistos e passaportes é exclusiva das autoridades competentes, e as taxas oficiais não estão incluídas nos valores da assessoria.</p>
  </section>
  <CtaSection />
</template>
