<script setup>
import { useId } from 'vue'

defineProps({ country: { type: String, required: true } })

const clipId = useId()
</script>

<template>
  <svg viewBox="0 0 32 32" width="32" height="32" class="flag-icon" aria-hidden="true">
    <clipPath :id="clipId"><circle cx="16" cy="16" r="16" /></clipPath>
    <g :clip-path="`url(#${clipId})`">
      <template v-if="country === 'us'">
        <rect width="32" height="32" fill="#fff" />
        <path fill="#c8102e" d="M0 0h32v2.5H0zM0 5h32v2.5H0zM0 10h32v2.5H0zM0 15h32v2.5H0zM0 20h32v2.5H0zM0 25h32v2.5H0zM0 30h32v2.5H0z" />
        <rect width="16" height="17.5" fill="#1b2f63" />
        <g fill="#fff">
          <circle cx="4" cy="4" r="1" /><circle cx="9" cy="4" r="1" /><circle cx="13" cy="4" r="1" />
          <circle cx="6.5" cy="8.5" r="1" /><circle cx="11" cy="8.5" r="1" />
          <circle cx="4" cy="13" r="1" /><circle cx="9" cy="13" r="1" /><circle cx="13" cy="13" r="1" />
        </g>
      </template>
      <template v-else-if="country === 'ca'">
        <rect width="32" height="32" fill="#fff" />
        <rect width="8" height="32" fill="#d52b1e" />
        <rect x="24" width="8" height="32" fill="#d52b1e" />
        <path fill="#d52b1e" d="m16 7-1.7 3.2-1.8-.9.9 4.6-2.1-2.2-.4 1.5-2.4-.4.8 2.5-1 .6 3.9 3.2-.5 1.4 3.7-.6.1 3.6h1l.1-3.6 3.7.6-.5-1.4 3.9-3.2-1-.6.8-2.5-2.4.4-.4-1.5-2.1 2.2.9-4.6-1.8.9Z" />
      </template>
      <template v-else-if="country === 'gb'">
        <rect width="32" height="32" fill="#1b2f63" />
        <path stroke="#fff" stroke-width="6" d="m0 0 32 32M32 0 0 32" />
        <path stroke="#c8102e" stroke-width="2.5" d="m0 0 32 32M32 0 0 32" />
        <path stroke="#fff" stroke-width="10" d="M16 0v32M0 16h32" />
        <path stroke="#c8102e" stroke-width="6" d="M16 0v32M0 16h32" />
      </template>
      <template v-else-if="country === 'au'">
        <rect width="32" height="32" fill="#1b2f63" />
        <path stroke="#fff" stroke-width="2.5" d="m0 0 15 15M15 0 0 15" />
        <path stroke="#fff" stroke-width="4" d="M7.5 0v15M0 7.5h15" />
        <path stroke="#c8102e" stroke-width="2" d="M7.5 0v15M0 7.5h15" />
        <g fill="#fff">
          <circle cx="8" cy="24" r="2.4" /><circle cx="23" cy="7" r="1.3" /><circle cx="28" cy="13" r="1.3" /><circle cx="18" cy="14" r="1.3" /><circle cx="23" cy="25" r="1.5" />
        </g>
      </template>
      <template v-else-if="country === 'it'">
        <rect width="11" height="32" fill="#009246" />
        <rect x="11" width="10" height="32" fill="#fff" />
        <rect x="21" width="11" height="32" fill="#ce2b37" />
      </template>
      <template v-else-if="country === 'mx'">
        <rect width="11" height="32" fill="#006847" />
        <rect x="11" width="10" height="32" fill="#fff" />
        <rect x="21" width="11" height="32" fill="#ce1126" />
        <circle cx="16" cy="16" r="2.6" fill="#8c6a2f" />
      </template>
      <template v-else-if="country === 'nz'">
        <rect width="32" height="32" fill="#1b2f63" />
        <path stroke="#fff" stroke-width="2.5" d="m0 0 15 15M15 0 0 15" />
        <path stroke="#fff" stroke-width="4" d="M7.5 0v15M0 7.5h15" />
        <path stroke="#c8102e" stroke-width="2" d="M7.5 0v15M0 7.5h15" />
        <g fill="#c8102e" stroke="#fff" stroke-width=".6">
          <circle cx="23" cy="8" r="1.5" /><circle cx="27" cy="14" r="1.5" /><circle cx="19" cy="15" r="1.5" /><circle cx="23" cy="24" r="1.5" />
        </g>
      </template>
      <template v-else-if="country === 'br'">
        <rect width="32" height="32" fill="#009c3b" />
        <path fill="#ffdf00" d="M16 6 29 16 16 26 3 16Z" />
        <circle cx="16" cy="16" r="5.4" fill="#002776" />
      </template>
      <template v-else-if="country === 'pt'">
        <rect width="13" height="32" fill="#046a38" />
        <rect x="13" width="19" height="32" fill="#da291c" />
        <circle cx="13" cy="16" r="6" fill="#ffe900" />
        <circle cx="13" cy="16" r="3" fill="#fff" stroke="#da291c" stroke-width="1.2" />
      </template>
    </g>
  </svg>
</template>
