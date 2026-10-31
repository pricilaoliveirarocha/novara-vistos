<script setup>
import { computed, ref } from 'vue'
import { Globe2, Search } from 'lucide-vue-next'
import PageHeader from '../components/PageHeader.vue'
import FlagIcon from '../components/FlagIcon.vue'
import WhatsAppIcon from '../components/WhatsAppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import { getServiceLabel, visaServices } from '../services'
import { whatsapp } from '../site'

const query = ref('')

const priceFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const normalize = (value) => value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const searchText = (service) => normalize([getServiceLabel(service), service.category, ...service.keywords].join(' '))

const filtered = computed(() => {
  const term = normalize(query.value.trim())
  return term ? visaServices.filter((service) => searchText(service).includes(term)) : visaServices
})
</script>

<template>
  <PageHeader
    eyebrow="Nossos serviços"
    title="Assessoria para"
    accent="cada destino."
    lead="Vistos, autorizações eletrônicas e passaportes com suporte especializado em todas as etapas."
  />
  <section class="section container">
    <div class="catalog" data-reveal>
      <div class="catalog-search">
        <Search :size="19" aria-hidden="true" />
        <input v-model="query" type="search" placeholder="Buscar serviço, país ou categoria" aria-label="Buscar serviço, país ou categoria">
      </div>
      <div v-if="filtered.length" class="catalog-grid">
        <article v-for="service in filtered" :id="`servico-${service.id}`" :key="service.id" class="card catalog-card">
          <div class="catalog-head">
            <FlagIcon v-if="service.flag" :country="service.flag" />
            <Globe2 v-else class="catalog-globe" :size="32" :stroke-width="1.4" aria-hidden="true" />
            <div>
              <h2>{{ getServiceLabel(service) }}</h2>
              <p>{{ service.category }}</p>
            </div>
          </div>
          <div class="catalog-prices">
            <p><strong>{{ priceFormatter.format(service.price) }}</strong> {{ service.priceCaption }}</p>
            <p v-if="service.secondaryPrice"><strong>{{ priceFormatter.format(service.secondaryPrice) }}</strong> {{ service.secondaryPriceCaption }}</p>
          </div>
          <a class="btn btn-primary" :href="whatsapp(`Olá! Quero contratar o serviço ${getServiceLabel(service)}.`)" target="_blank" rel="noopener">
            <WhatsAppIcon /> Contratar
          </a>
        </article>
      </div>
      <p v-else class="catalog-empty" role="status">Nenhum serviço encontrado.</p>
    </div>
    <p class="disclaimer">A Novara Vistos é uma assessoria privada, sem vínculo com consulados ou órgãos de governo. A decisão sobre a concessão de vistos e passaportes é exclusiva das autoridades competentes, e as taxas oficiais não estão incluídas nos valores da assessoria.</p>
  </section>
  <CtaBand title="Não encontrou seu destino?" accent="Fale com a gente." message="Olá, não encontrei meu destino no site e gostaria de uma orientação." />
</template>
