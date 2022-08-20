import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Framework from '@/layout/Framework.vue'

// 异步加载页面组件
const importPage = (view: string) => () => import(`@/views/${view}.vue`)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Framework,
    children: [
      {
        path: '/',
        name: 'Home',
        component: importPage('Home'),
      },
      {
        path: '/system/user',
        name: 'User',
        component: importPage('system/UserView'),
      },
      {
        path: '/system/role',
        name: 'Role',
        component: importPage('system/RoleView'),
      },
      {
        path: '/system/menu',
        name: 'Menu',
        component: importPage('system/MenuView'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
