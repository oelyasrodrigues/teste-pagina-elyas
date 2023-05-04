import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  css: {
    modules: true,
    preprocessorOptions: {
      sass: {
        additionalData: '@import "./src/css/variables.scss";'
      }
    }
  }
})
