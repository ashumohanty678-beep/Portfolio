import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/link': path.resolve(__dirname, './src/lib/next-link-shim.tsx'),
      'next/image': path.resolve(__dirname, './src/lib/next-image-shim.tsx'),
    },
  },
  server: {
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
