<script setup>
import { FileText, FolderOpen, MessagesSquare, Plane } from 'lucide-vue-next'

const steps = [
  { icon: MessagesSquare, title: 'Fale conosco', text: 'Tire suas dúvidas com um especialista.' },
  { icon: FileText, title: 'Análise do caso', text: 'Avaliamos o seu perfil e orientamos o melhor caminho.' },
  { icon: FolderOpen, title: 'Documentação', text: 'Cuidamos de toda a preparação com atenção e segurança.' },
  { icon: Plane, title: 'Visto em mãos', text: 'Acompanhamos até o resultado final.' }
]
</script>

<template>
  <section class="section container">
    <div class="section-head" data-reveal>
      <h2>Como funciona</h2>
    </div>
    <ol class="step-grid">
      <li v-for="(step, index) in steps" :key="step.title" class="card step" data-reveal :style="{ '--d': `${index * 0.07}s` }">
        <span class="step-number">{{ index + 1 }}</span>
        <component :is="step.icon" :size="22" :stroke-width="1.5" aria-hidden="true" />
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </li>
    </ol>
  </section>
</template>
