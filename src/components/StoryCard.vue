<script setup>
import { Star } from 'lucide-vue-next'
import ClientAvatar from './ClientAvatar.vue'
import FlagIcon from './FlagIcon.vue'

defineProps({ story: { type: Object, required: true } })
</script>

<template>
  <li class="card story-card">
    <span class="stars" role="img" :aria-label="`Avaliação: ${story.rating} de 5 estrelas`">
      <Star v-for="n in story.rating" :key="n" :size="14" fill="currentColor" stroke="none" aria-hidden="true" />
    </span>
    <blockquote>“{{ story.quote }}”</blockquote>
    <footer>
      <ClientAvatar :name="story.name" :photo="story.photo" />
      <div>
        <strong>{{ story.name }}</strong>
        <span v-if="story.visa" class="story-visa">
          <FlagIcon v-if="story.country" :country="story.country" />
          {{ story.visa }}
        </span>
      </div>
    </footer>
  </li>
</template>
