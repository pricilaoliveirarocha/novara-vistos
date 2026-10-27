<script setup>
import { onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import JourneySection from './components/JourneySection.vue'
import ServicesSection from './components/ServicesSection.vue'
import TrustSection from './components/TrustSection.vue'
import PlansSection from './components/PlansSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting))
  }, { threshold: 0.12 })
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <JourneySection />
    <ServicesSection />
    <TrustSection />
    <PlansSection />
    <CtaSection />
  </main>
  <SiteFooter />
</template>
