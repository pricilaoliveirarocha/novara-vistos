import { createApp } from 'vue'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import './style.css'
import App from './App.vue'
import router from './router'

// As animações de entrada só escondem conteúdo quando o JavaScript está ativo.
document.documentElement.classList.add('js')

createApp(App).use(router).mount('#app')
