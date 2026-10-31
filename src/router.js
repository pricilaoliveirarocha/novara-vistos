import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'

const PAGE_FADE_MS = 260

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Novara Vistos | Assessoria de Vistos e Passaportes', description: 'Assessoria especializada em vistos internacionais, passaportes e documentação consular. Orientação personalizada do primeiro contato ao resultado final.' } },
  { path: '/sobre', component: () => import('./pages/AboutPage.vue'), meta: { title: 'Sobre | Novara Vistos', description: 'Conheça a Novara Vistos, assessoria que acompanha você em cada etapa do seu visto ou passaporte, com atendimento personalizado em todo o Brasil.' } },
  { path: '/servicos', component: () => import('./pages/ServicesPage.vue'), meta: { title: 'Serviços e Valores | Novara Vistos', description: 'Assessoria para vistos dos EUA, Canadá, Austrália e outros destinos, autorizações eletrônicas e passaporte. Confira serviços e valores.' } },
  { path: '/depoimentos', component: () => import('./pages/TestimonialsPage.vue'), meta: { title: 'Depoimentos | Novara Vistos', description: 'Histórias de clientes que contaram com a assessoria da Novara Vistos.' } },
  { path: '/contato', component: () => import('./pages/ContactPage.vue'), meta: { title: 'Contato | Novara Vistos', description: 'Fale com um especialista da Novara Vistos pelo WhatsApp ou por e-mail e receba uma orientação personalizada.' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Espera a página anterior sair para o salto de rolagem não aparecer na transição.
  scrollBehavior(to, from) {
    const target = to.hash
      // top soma a altura do menu e o deslocamento (26px) das animações de entrada.
      ? { el: to.hash, top: 112, behavior: to.path !== from.path || prefersReducedMotion() ? 'auto' : 'smooth' }
      : { top: 0 }
    if (to.path === from.path) return target
    return new Promise((resolve) => setTimeout(() => resolve(target), PAGE_FADE_MS + 40))
  }
})

router.afterEach((to) => {
  document.title = to.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', to.meta.description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://www.novaravistos.com.br${to.path === '/' ? '/' : to.path}`)
})

export default router
