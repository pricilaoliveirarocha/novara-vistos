<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  accent: { type: String, required: true },
  lead: { type: String, required: true },
  image: { type: String, required: true },
  position: { type: String, default: '50% 50%' }
})
</script>

<template>
  <section class="page-hero">
    <img class="page-hero-photo" :src="`/images/${image}.webp`" alt="" :style="{ objectPosition: position }" width="640" height="948" fetchpriority="high">
    <div class="container page-hero-content">
      <p class="eyebrow hero-in" style="--d: .05s">{{ eyebrow }}</p>
      <h1 class="hero-in" style="--d: .14s">{{ title }}<br><em>{{ accent }}</em></h1>
      <p class="hero-copy hero-in" style="--d: .26s">{{ lead }}</p>
    </div>
  </section>
</template>
