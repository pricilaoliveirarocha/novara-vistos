<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  accent: { type: String, required: true },
  lead: { type: String, required: true }
})
</script>

<template>
  <header class="page-header container">
    <p class="eyebrow hero-in" style="--d: .05s">{{ eyebrow }}</p>
    <h1 class="hero-in" style="--d: .12s">{{ title }}<br><span class="accent">{{ accent }}</span></h1>
    <p class="lead hero-in" style="--d: .22s">{{ lead }}</p>
  </header>
</template>
