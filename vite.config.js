import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';

const src = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');

export default defineConfig({
  root: src,
  watch: {
    include: resolve(src, '/**'),
  },
  build: {
    manifest: true,
    outDir: dist,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(src, 'index.html'),
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },

  plugins: [nunjucks()],
});
