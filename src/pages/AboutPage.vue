<script setup>
import PageHero from '../components/PageHero.vue'
import TrustSection from '../components/TrustSection.vue'
import JourneySection from '../components/JourneySection.vue'
import CtaSection from '../components/CtaSection.vue'
</script>

<template>
  <PageHero
    eyebrow="Sobre a Novara"
    title="Cada visto começa"
    accent="com uma história."
    lead="Somos uma assessoria dedicada a tornar o processo consular mais claro, organizado e tranquilo para quem está prestes a viver um novo destino."
    image="servico-estudante"
    position="50% 35%"
  />
  <section class="section about paper">
    <div class="container about-grid">
      <div class="about-photo" data-reveal>
        <img src="/images/servico-passaporte.webp" width="640" height="948" loading="lazy" alt="Passaporte brasileiro sobre uma mesa de mármore">
      </div>
      <div data-reveal style="--d: .12s">
        <p class="eyebrow eyebrow-dark">Quem somos</p>
        <h2>Cuidamos dos detalhes para você olhar para o destino.</h2>
        <p>Formulários, agendamentos e documentos podem parecer complicados, principalmente na primeira vez. A Novara Vistos existe para organizar esse caminho e estar ao seu lado do primeiro contato ao resultado final.</p>
        <p>Cada pessoa tem um perfil e um objetivo. Por isso, analisamos o seu caso, explicamos cada etapa com transparência e orientamos a melhor forma de seguir, esteja você onde estiver no Brasil.</p>
      </div>
    </div>
  </section>
  <TrustSection />
  <JourneySection />
  <CtaSection />
</template>
