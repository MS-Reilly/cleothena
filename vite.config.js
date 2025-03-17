// vite.config.js
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Cleothena',
      formats: ['es', 'cjs'],
      fileName: (format) => `cleothena.${format}.js`,
    },
    cssCodeSplit: false, // Inlines all CSS into the JS bundle
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
