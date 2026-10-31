<script setup>
import { computed, ref } from 'vue'
import { ArrowRight, Check, Globe2, Layers, Search } from 'lucide-vue-next'
import PageHeader from '../components/PageHeader.vue'
import FlagIcon from '../components/FlagIcon.vue'
import WhatsAppIcon from '../components/WhatsAppIcon.vue'
import CtaBand from '../components/CtaBand.vue'
import { getServiceLabel, matchesFilter, serviceFilters, visaServices } from '../services'
import { whatsapp } from '../site'

const query = ref('')
const activeFilter = ref('todos')

const priceFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
const normalize = (value) => value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const searchText = (service) => normalize([getServiceLabel(service), service.category, service.country, ...service.keywords].join(' '))

const filtered = computed(() => {
    const term = normalize(query.value.trim())
    return visaServices.filter((service) => matchesFilter(service, activeFilter.value) && (!term || searchText(service).includes(term)))
})
</script>

<template>
    <PageHeader eyebrow="Nossos serviços" title="Assessoria para" accent="cada destino."
        lead="Vistos, autorizações eletrônicas e passaportes com suporte especializado em todas as etapas." />
    <section class="section catalog-section">
        <div class="catalog" data-reveal>
            <div class="catalog-filters" role="group" aria-label="Filtrar por destino">
                <button v-for="filter in serviceFilters" :key="filter.id" type="button"
                    :class="['catalog-filter', { active: activeFilter === filter.id }]"
                    :aria-pressed="activeFilter === filter.id" @click="activeFilter = filter.id">
                    <FlagIcon v-if="filter.flag" :country="filter.flag" />
                    <Layers v-else-if="filter.id === 'todos'" :size="18" :stroke-width="1.6" aria-hidden="true" />
                    <Globe2 v-else :size="18" :stroke-width="1.6" aria-hidden="true" />
                    {{ filter.label }}
                </button>
            </div>
            <div class="catalog-search">
                <Search :size="19" aria-hidden="true" />
                <input v-model="query" type="search" placeholder="Buscar serviço, país ou categoria..."
                    aria-label="Buscar serviço, país ou categoria">
            </div>
            <div v-if="filtered.length" class="catalog-grid">
                <article v-for="service in filtered" :id="`servico-${service.id}`" :key="service.id"
                    class="catalog-card">
                    <div class="catalog-photo" aria-hidden="true">
                        <img :src="`/images/${service.image}.webp`" alt="" :style="{ objectPosition: service.position }"
                            loading="lazy">
                    </div>
                    <div class="catalog-head">
                        <span class="catalog-flag">
                            <FlagIcon v-if="service.flag" :country="service.flag" />
                            <Globe2 v-else :size="30" :stroke-width="1.4" aria-hidden="true" />
                        </span>
                        <div>
                            <h2>{{ getServiceLabel(service) }}</h2>
                            <p>{{ service.category }}</p>
                            <span class="catalog-country">
                                <FlagIcon v-if="service.flag" :country="service.flag" />
                                <Globe2 v-else :size="13" aria-hidden="true" />
                                {{ service.country }}
                            </span>
                        </div>
                    </div>
                    <div class="catalog-prices">
                        <p><strong>{{ priceFormatter.format(service.price) }}</strong> {{ service.priceCaption }}</p>
                        <p v-if="service.secondaryPrice"><strong>{{ priceFormatter.format(service.secondaryPrice)
                        }}</strong> {{ service.secondaryPriceCaption }}</p>
                    </div>
                    <ul class="catalog-features">
                        <li v-for="feature in service.features" :key="feature"><span>
                                <Check :size="10" :stroke-width="3" aria-hidden="true" />
                            </span>{{ feature }}</li>
                    </ul>
                    <div class="catalog-actions">
                        <a class="btn btn-primary"
                            :href="whatsapp(`Olá! Quero contratar o serviço ${getServiceLabel(service)}.`)"
                            target="_blank" rel="noopener">
                            <WhatsAppIcon /> Contratar
                        </a>
                        <a class="text-link"
                            :href="whatsapp(`Olá! Gostaria de saber mais sobre o serviço ${getServiceLabel(service)}.`)"
                            target="_blank" rel="noopener" :aria-label="`Saiba mais sobre ${getServiceLabel(service)}`">
                            Saiba mais
                            <ArrowRight :size="16" aria-hidden="true" />
                        </a>
                    </div>
                </article>
            </div>
            <p v-else class="catalog-empty" role="status">Nenhum serviço encontrado.</p>
            <p class="disclaimer">A Novara Vistos é uma assessoria privada, sem vínculo com consulados ou órgãos de
                governo. A decisão sobre a concessão de vistos e passaportes é exclusiva das autoridades competentes, e
                as taxas oficiais não estão incluídas nos valores da assessoria.</p>
        </div>
    </section>
    <CtaBand title="Não encontrou seu destino?" accent="Fale com a gente."
        message="Olá, não encontrei meu destino no site e gostaria de uma orientação." />
</template>
