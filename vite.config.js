import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';

const __src = resolve(__dirname, 'src');
const __dist = resolve(__dirname, 'dist');

export default defineConfig({
  root: __src,
  build: {
    watch: {
      include: resolve(__src, '/**'),
    },
    manifest: true,
    outDir: __dist,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__src, 'index.html'),
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },

  plugins: [nunjucks()],
});
