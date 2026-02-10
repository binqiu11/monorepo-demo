import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [vue(), FullReload('./src/**/*'), FullReload('../rmax/dist/**/*')],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      // 开发和生产都指向 dist
      '@packages/rmax': resolve(__dirname, '../rmax/dist/index.es.js'),
      '@packages/shared': resolve(__dirname, '../shared/'),
    },
  },
  server: {
    port: 3000,
    hmr: false,
  },
});
