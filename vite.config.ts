import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'app') },
    ],
  },
  root: "app",
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    proxy: {
      '/.netlify': 'http://localhost:9999/.netlify'
    }
  },
  build: {
    outDir: "../dist",
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: []
})
