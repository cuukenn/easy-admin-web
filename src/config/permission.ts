import router from '@/router'
import store from '@/store'
router.beforeEach((to, from, next) => {
  if (store.getters.routers.length <= 0) {
    store.dispatch('permission/generateRoutes').then((accessRoutes) => {
      for (const accessRoute of accessRoutes) {
        router.addRoute(accessRoute)
      }
      next({ ...to, replace: true })
    })
  }
  next()
})
