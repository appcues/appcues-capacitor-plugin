import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  optimizeDeps: {
    // Stencil lazy entry chunks in Ionic 5 break Vite's dependency prebundler.
    exclude: ['@ionic/core', '@ionic/react', '@stencil/core']
  },
  build: {
    // Ionic 5 CSS uses :host-context(), which lightningcss drops.
    cssMinify: false
  }
})
