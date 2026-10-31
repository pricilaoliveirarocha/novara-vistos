<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  photo: { type: String, default: '' }
})

const initials = computed(() => props.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase())
</script>

<template>
  <img v-if="photo" class="client-avatar" :src="photo" width="42" height="42" alt="" loading="lazy">
  <span v-else class="client-avatar" aria-hidden="true">{{ initials }}</span>
</template>
