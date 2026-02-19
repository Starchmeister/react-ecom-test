import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5e21-2a09-bac5-d4bf-555-00-88-15.ngrok-free.app',
      'localhost',
      '127.0.0.1'
    ]
  }
})
