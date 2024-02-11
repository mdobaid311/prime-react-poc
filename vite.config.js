import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
const sassPrimeReactThemeRegex = /theme-.*.(scss|sass)$/;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
