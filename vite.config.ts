import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3001,
    fs: {
      strict: true, // Enforce proper file access
    },
  },
  build: {
    rollupOptions: {
      input: './client/src/main.tsx', // Correct entry point based on your structure
    },
  },
});
