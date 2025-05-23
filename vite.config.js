import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 開發中、產品路徑
  base: process.env.NODE_ENV === 'production' ? '/react-week8-2/' : '/',
  plugins: [react()],
})