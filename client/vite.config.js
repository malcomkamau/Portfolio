import { defineConfig } from 'vite'

export default defineConfig({
  // Base public path
  base: './',
  
  // Build options
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate sourcemaps for debugging
    sourcemap: false,
    // Optimize chunks
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  
  // Server options
  server: {
    port: 3000,
    open: true
  }
})
