import { constantRoutes } from '@/router'
import api from '@/api/permission/api'
import { RouteRecordRaw } from 'vue-router'
import { AuthMenuResVo } from '@/types/permission/types'
const permission = {
  namespaced: true,
  state: {
    addRouters: {},
    routers: [],
    menus: [],
  },
  mutations: {
    SET_ROUTES: (state: any, routers: any) => {
      state.addRouters = routers
      state.routers = constantRoutes.concat(routers)
    },
    SET_MENUS: (state: any, menus: any) => {
      state.menus = menus
    },
  },
  actions: {
    // 生成路由
    generateRoutes({ commit }: any) {
      return new Promise((resolve) => {
        return api.auth.authMenu.request().then((res) => {
          const rootPath = '/'
          // 初始化路由
          const rootRouter = generateRootRouter(rootPath)
          const dynamicRouters = generateAsyncRouters(res)
          if (dynamicRouters != null && dynamicRouters.length > 0) {
            rootRouter.children = dynamicRouters
          }
          const finalRouters = [rootRouter]
          // 初始化菜单
          const menus = generateAsyncMenues(res, rootPath)
          commit('SET_ROUTES', finalRouters)
          commit('SET_MENUS', menus)
          resolve(finalRouters)
        })
      })
    },
  },
}
const generateRootRouter = (rootPath: string): RouteRecordRaw => {
  return {
    path: rootPath,
    component: () => require('@/layout/Framework'),
    meta: {
      title: '',
    },
    children: [],
  }
}
const generateAsyncRouters = (asyncRouters: Array<AuthMenuResVo> | undefined) => {
  if (asyncRouters == null || asyncRouters.length <= 0) {
    return []
  }
  const routers: Array<RouteRecordRaw> = []
  for (const vo of asyncRouters) {
    const children = generateAsyncRouters(vo.children)
    routers.push({
      path: vo.routerPath ?? '',
      component: loadComponent(vo.componentPath),
      meta: {
        title: vo.name,
        icon: vo.icon,
        noCache: false,
      },
      children,
    })
  }
  return routers
}
const loadComponent = (path: string | undefined) => {
  if (path === undefined) {
    return null
  }
  return () => require(`@/views/${path}`)
}
const generateAsyncMenues = (asyncRouters: Array<AuthMenuResVo> | undefined, parentIndex: string) => {
  if (asyncRouters == null || asyncRouters.length <= 0) {
    return []
  }
  const menus: Array<any> = []
  for (const vo of asyncRouters) {
    const index = `${parentIndex}/${vo.routerPath}`.replaceAll(/\/+/g, '/')
    const subMenus = generateAsyncMenues(vo.children, index)
    menus.push({
      index,
      title: vo.name,
      icon: vo.icon,
      subMenus,
    })
  }
  return menus
}
export default permission
