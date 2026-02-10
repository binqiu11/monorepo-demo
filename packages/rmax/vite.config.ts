import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react-swc';
import VueDevTools from 'vite-plugin-vue-devtools';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  server: {
    port: 3001,
  },
  plugins: [VueDevTools(), vue(), react(), Components()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
      '@packages/shared': resolve(__dirname, '../shared/'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'Rmax',
      fileName: (format, entryName) => {
        if (entryName === 'index') {
          return `rmax.${format}.js`;
        }
        return `${entryName}.${format}.js`;
      },
      formats: ['es'], // tree-shaking
    },
    rollupOptions: {
      external: ['vue', 'pinia', 'react', 'react-dom', 'vue-router'], // 防止上下文丢失
      output: {
        // 保留模块结构以便tree-shaking
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'index') {
            return '[name].[format].js';
          }
          return '[name]/[name].[format].js';
        },
      },
    },
    minify: 'esbuild',
    emptyOutDir: true,
  },
});
