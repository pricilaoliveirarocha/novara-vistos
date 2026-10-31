<script setup>
import { FileText, FolderOpen, MessagesSquare, Plane } from 'lucide-vue-next'

const steps = [
  { icon: MessagesSquare, title: 'Fale conosco', text: 'Tire suas dúvidas com um especialista.' },
  { icon: FileText, title: 'Análise do caso', text: 'Avaliamos o seu perfil e orientamos o melhor caminho.' },
  { icon: FolderOpen, title: 'Preparação da documentação', text: 'Cuidamos de toda a documentação com atenção e segurança.' },
  { icon: Plane, title: 'Visto em mãos', text: 'Acompanhamos até o resultado final.' }
]
</script>

<template>
  <section class="section journey paper">
    <div class="container">
      <div data-reveal>
        <p class="eyebrow eyebrow-dark">Como funciona</p>
        <h2>Sua jornada começa aqui.</h2>
        <p class="section-lead">Do primeiro contato ao seu visto em mãos, nós cuidamos de cada detalhe.</p>
      </div>
      <ol class="steps">
        <li v-for="(step, index) in steps" :key="step.title" class="step" data-reveal :style="{ '--d': `${index * 0.14}s` }">
          <div class="step-head">
            <span class="step-number">{{ String(index + 1).padStart(2, '0') }}</span>
            <component :is="step.icon" :size="30" :stroke-width="1.3" aria-hidden="true" />
            <i v-if="index < steps.length - 1" class="step-line" aria-hidden="true"></i>
          </div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
