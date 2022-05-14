import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

const srcPath = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  publicDir: 'public',
  assetsInclude: ['**/*.gltf'],
  resolve: {
    alias: [
      {find: '@', replacement:srcPath}
    ]
  },
})
