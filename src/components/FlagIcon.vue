<script setup>
defineProps({ country: { type: String, required: true } })
</script>

<template>
  <svg viewBox="0 0 32 32" width="32" height="32" class="flag-icon" aria-hidden="true">
    <clipPath id="flag-circle"><circle cx="16" cy="16" r="16" /></clipPath>
    <g v-if="country === 'us'" clip-path="url(#flag-circle)">
      <rect width="32" height="32" fill="#fff" />
      <path fill="#c8102e" d="M0 0h32v2.5H0zM0 5h32v2.5H0zM0 10h32v2.5H0zM0 15h32v2.5H0zM0 20h32v2.5H0zM0 25h32v2.5H0zM0 30h32v2.5H0z" />
      <rect width="16" height="17.5" fill="#1b2f63" />
      <g fill="#fff">
        <circle cx="4" cy="4" r="1" /><circle cx="9" cy="4" r="1" /><circle cx="13" cy="4" r="1" />
        <circle cx="6.5" cy="8.5" r="1" /><circle cx="11" cy="8.5" r="1" />
        <circle cx="4" cy="13" r="1" /><circle cx="9" cy="13" r="1" /><circle cx="13" cy="13" r="1" />
      </g>
    </g>
    <g v-else clip-path="url(#flag-circle)">
      <rect width="32" height="32" fill="#fff" />
      <rect width="8" height="32" fill="#d52b1e" />
      <rect x="24" width="8" height="32" fill="#d52b1e" />
      <path fill="#d52b1e" d="m16 7-1.7 3.2-1.8-.9.9 4.6-2.1-2.2-.4 1.5-2.4-.4.8 2.5-1 .6 3.9 3.2-.5 1.4 3.7-.6.1 3.6h1l.1-3.6 3.7.6-.5-1.4 3.9-3.2-1-.6.8-2.5-2.4.4-.4-1.5-2.1 2.2.9-4.6-1.8.9Z" />
    </g>
  </svg>
</template>
