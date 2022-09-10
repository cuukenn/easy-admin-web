import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

//方法一
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: true,
      mockPath: './src/mock',
    }),
  ],
  base: '/x-admin-web',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
