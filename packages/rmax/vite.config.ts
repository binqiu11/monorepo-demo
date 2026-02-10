import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

// 读取当前包的 package.json，用于自动生成 external 依赖列表
const pkgJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf-8'),
);

const externalDeps = [
  // 运行时依赖：dependencies + peerDependencies
  ...Object.keys(pkgJson.dependencies ?? {}),
  ...Object.keys(pkgJson.peerDependencies ?? {}),
  // 额外需要 external 的“隐式依赖”
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
];

// 根据依赖名判断某个 import id 是否需要 external：
// - 完全等于依赖名
// - 或以 "<依赖名>/" 子路径形式开头（例如 "@unifid-portal/shared/components"）
const isExternal = (id: string) =>
  externalDeps.some(
    (dep) => id === dep || id.startsWith(`${dep}/`),
  );

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
      // 不在此包中打包任何运行时依赖，由外部（shell 应用或宿主应用）统一提供
      // 使用函数 external，确保像 "@unifid-portal/shared/components" 这样的子路径也会被 external 掉
      external: isExternal,
      output: {
        exports: 'named',
      },
    },
    minify: 'esbuild',
    // Keep dist entry stable while running `vite build --watch`
    // so shell app can continuously resolve `@unifid-portal/rmax`.
    emptyOutDir: false,
  },
});
