import { defineConfig } from 'vite'
import react from '@vitejs/react-swc' // (Leave your standard framework imports as they are!)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // (Leave your plugins array as it is!)
  base: '/Nexus-UNIMED-project/', // <--- THIS LINE IS CRITICAL!
})