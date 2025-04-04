import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  server: {
    port: 3001,
    host: true, // чтобы слушать внешние подключения
    allowedHosts: ['9e5a-35-228-26-224.ngrok-free.app'], // разрешаем ngrok-хост
  },
});