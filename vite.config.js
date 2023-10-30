import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/React-App-Movie",
  plugins: [react()],
  build: {
    target: 'esnext', //browsers can handle the latest ES features
    chunkSizeWarningLimit: 1600,
  }
})