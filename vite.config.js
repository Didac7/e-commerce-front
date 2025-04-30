import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite exponer públicamente el frontend
    allowedHosts: ['63cb-158-172-226-229.ngrok-free.app'] // agrega aquí tu dominio Ngrok
  }
})
