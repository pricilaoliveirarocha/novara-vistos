import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      onLog(level, log, defaultHandler) {
        const isLucideClientDirective =
          log.code === 'MODULE_LEVEL_DIRECTIVE' &&
          log.id?.includes('node_modules/lucide-react/')

        if (isLucideClientDirective) return
        defaultHandler(level, log)
      },
    },
  },
})
