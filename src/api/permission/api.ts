import Api from '@/api/api'
export const auth = {
  authMenu: Api.create('/auth/list/menus', 'get'),
}
const api = { auth }
export default api
