import '@/assets/css/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { mockXHR } from '@/mock/index'
if (import.meta.env.MODE === 'development' && import.meta.env.VITE_APP_MOCKJS_ENABLED) {
  mockXHR()
}
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component as any)
}
app.use(store).use(router).mount('#app')
