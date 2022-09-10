import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import importToCDN from 'vite-plugin-cdn-import'

//方法一
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: true,
      mockPath: './src/mock',
    }),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://cdn.jsdelivr.net/vue@3.2.13',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: `https://cdn.jsdelivr.net/npm/element-plus@2.2.14`,
          css: 'https://cdn.jsdelivr.net/npm/element-plus@2.2.14/dist/index.css',
        },
        {
          name: 'mockjs',
          var: 'mockjs',
          path: `https://cdn.jsdelivr.net/npm/mockjs@1.1.0`,
        },
        {
          name: 'echarts',
          var: 'echarts',
          path: `https://cdn.jsdelivr.net/npm/echarts@5.3.3`,
        },
      ],
    }),
  ],
  base: '/x-admin-web',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
})
