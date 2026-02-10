import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  server: {
    port: 3001,
  },
  plugins: [vue(), react()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Rmax',
      fileName: () => 'index.es.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'pinia', 'react', 'react-dom', 'vue-router', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      output: {
        exports: 'named',
      },
    },
    minify: 'esbuild',
    // Keep dist entry stable while running `vite build --watch`
    // so shell app can continuously resolve `@unifid-protal/rmax`.
    emptyOutDir: false,
  },
});
