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
        path: '',
        name: 'Dashboard',
        component: importPage('dashboard'),
      },
    ],
  },
  {
    path: '/system',
    component: Framework,
    children: [
      {
        path: 'user',
        name: 'User',
        component: importPage('system/user'),
      },
      {
        path: 'role',
        name: 'Role',
        component: importPage('system/role'),
      },
      {
        path: 'menu',
        name: 'Menu',
        component: importPage('system/menu'),
      },
    ],
  },
  {
    path: '/monitor',
    component: Framework,
    children: [
      {
        path: 'user-online',
        name: 'User-online',
        component: importPage('monitor/user-online'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
