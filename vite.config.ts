import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/portofolio-1/' → adjust to your GitHub repository name when deploying
// For root deployment (e.g. username.github.io), use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/portofolio-1/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
