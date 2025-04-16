/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.json' }),
    tailwindcss({
      injectInto: 'css-in-js',
    }),
    cssInjectedByJsPlugin(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  test: {
    exclude: ['node_modules'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
  },
  build: {
    outDir: 'dist',
    cssMinify: true,
    sourcemap: true,
    minify: 'terser',
    cssCodeSplit: false,
    reportCompressedSize: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: 'src/index.ts',
      name: 'Parcel React Library Starter',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`,
    },
  },
});
