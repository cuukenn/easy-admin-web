import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Framework from '@/views/layout/Framework.vue'
import { defineAsyncComponent } from 'vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Framework,
    meta: {
      title: '',
    },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: defineAsyncComponent(() => import(/* @vite-ignore */ `./../views/dashboard/index.vue`)),
        meta: {
          title: '监控',
        },
      },
    ],
  },
  {
    path: '/system',
    component: Framework,
    meta: {
      title: '系统管理',
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: defineAsyncComponent(() => import(/* @vite-ignore */ `./../views/system/user/index.vue`)),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: 'role',
        name: 'Role',
        component: defineAsyncComponent(() => import(/* @vite-ignore */ `./../views/system/role/index.vue`)),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: 'menu',
        name: 'Menu',
        component: defineAsyncComponent(() => import(/* @vite-ignore */ `./../views/system/menu/index.vue`)),
        meta: {
          title: '菜单管理',
        },
      },
    ],
  },
  {
    path: '/monitor',
    component: Framework,
    meta: {
      title: '系统监控',
    },
    children: [
      {
        path: 'user-online',
        name: 'User-online',
        component: defineAsyncComponent(() => import(/* @vite-ignore */ `./../views/monitor/user-online/index.vue`)),
        meta: {
          title: '用户在线情况',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    //动态标题
    document.title = `XAdmin | ${to.meta.title}`
  }
  next()
})

export default router
