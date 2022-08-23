import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Framework from '@/views/layout'

// 异步加载页面组件
const importPage = (view: string) => () => import(`@/views/${view}`)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Framework,
    children: [
      {
        path: '/',
        name: 'Home',
        component: importPage('layout/XHome'),
      },
      {
        path: '/system/user',
        name: 'User',
        component: importPage('system/user'),
      },
      {
        path: '/system/role',
        name: 'Role',
        component: importPage('system/role'),
      },
      {
        path: '/system/menu',
        name: 'Menu',
        component: importPage('system/menu'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
