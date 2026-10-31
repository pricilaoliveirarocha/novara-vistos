import { createApp } from 'vue'
import '@fontsource-variable/playfair-display/wght.css'
import '@fontsource-variable/playfair-display/wght-italic.css'
import '@fontsource-variable/montserrat/wght.css'
import '@fontsource/allura/400.css'
import './style.css'
import App from './App.vue'
import router from './router'

// As animações de entrada só escondem conteúdo quando o JavaScript está ativo.
document.documentElement.classList.add('js')

createApp(App).use(router).mount('#app')
