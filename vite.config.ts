import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: './', // Esto permite que los assets se carguen correctamente en GitHub Pages
  build: {
    outDir: 'docs', // Cambia el directorio de salida a 'docs' en lugar de 'dist'
  },
});
