<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import StoryCard from './StoryCard.vue'
import { featuredTestimonials } from '../testimonials'
</script>

<template>
  <section class="section container">
    <div class="section-head" data-reveal>
      <h2>O que nossos clientes dizem</h2>
      <RouterLink class="text-link" to="/depoimentos">Ver todos os depoimentos <ArrowRight :size="16" aria-hidden="true" /></RouterLink>
    </div>
    <ul class="story-grid" data-reveal style="--d: .08s">
      <StoryCard v-for="story in featuredTestimonials" :key="story.name" :story="story" />
    </ul>
  </section>
</template>
