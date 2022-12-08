import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const root: RouteRecordRaw = {
  path: '/',
  component: () => require('@/layout/Framework'),
  meta: {
    title: '',
  },
}
const errors: Array<RouteRecordRaw> = [
  {
    path: '/error/401',
    component: () => require('@/views/error/401'),
    meta: {
      title: '401',
    },
  },
  {
    path: '/error/403',
    component: () => require('@/views/error/403'),
    meta: {
      title: '403',
    },
  },
  {
    path: '/error/404',
    component: () => require('@/views/error/404'),
    meta: {
      title: '404',
    },
  },
]
export const constantRoutes: Array<RouteRecordRaw> = [root, ...errors]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes,
})
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    //动态标题
    document.title = `EasyAdmin | ${to.meta.title}`
  }
  next()
})
export default router
