import { createApp } from 'vue'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource-variable/manrope/index.css'
import '@fontsource/allura/400.css'
import './style.css'
import App from './App.vue'
import router from './router'

// As animações de entrada só escondem conteúdo quando o JavaScript está ativo.
document.documentElement.classList.add('js')

createApp(App).use(router).mount('#app')
