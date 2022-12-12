import Api from '@/api/api'
export const auth = {
  authMenu: Api.create('/auth/list/menus', 'get'),
}
export const permission = {
  userRoles: Api.create('/permission/list/user/role', 'get'),
  invokeRoles: Api.create('/permission/invoke/user/role', 'post'),
  roleMenus: Api.create('/permission/list/role/menu', 'get'),
  invokeMenus: Api.create('/permission/invoke/role/menu', 'post'),
}
const api = { auth, permission }
export default api
