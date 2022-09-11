import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import externalGlobals from 'rollup-plugin-external-globals'
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'

//cdn导入
//如果变量不对使用externalGlobals进行全局变量替换
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: true,
      mockPath: './src/mock',
    }),
    importToCDN({
      modules: [
        autoComplete('vue'),
        autoComplete('@vueuse/shared'),
        autoComplete('@vueuse/core'),
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'dist/vue-router.global.min.js',
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'dist/index.full.min.js',
          css: 'dist/index.css',
        },
        {
          name: '@element-plus/icons-vue',
          var: 'ElementPlusIconsVue',
          path: 'dist/index.iife.min.js',
        },
        {
          name: 'echarts',
          var: 'echarts',
          path: 'dist/echarts.min.js',
        },
        {
          name: 'mockjs',
          var: 'Mock',
          path: 'dist/mock.min.js',
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
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
      plugins: [
        externalGlobals({
          'vue-router': '',
          'element-plus': 'ElementPlus',
          '@element-plus/icons-vue': 'ElementPlusIconsVue',
          mockjs: 'Mock',
        }),
      ],
    },
  },
})
