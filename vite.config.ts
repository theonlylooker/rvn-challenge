import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "rvn-challenge",
  define:{'process.env':process.env},
  plugins: [react()],
})
