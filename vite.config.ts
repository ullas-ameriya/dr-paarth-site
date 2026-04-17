import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
    // 2. Add the Tailwind CSS plugin
    , tailwindcss()
  ],
})
