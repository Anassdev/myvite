import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: './',
    base: './',
    build: {
        manifest: true,
        assetsDir: '',
        outDir: './build/',
        rollupOptions: {
            input: {
                'main.jsx': './assets/main.jsx',
            }
        }
    }
})
