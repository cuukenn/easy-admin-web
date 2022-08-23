import Api from '@/common/Api'
export const userApi = {
  list: Api.create('/sys/user/list', 'get'),
}
export const roleApi = {
  list: Api.create('/sys/role/list', 'get'),
}
export const menuApi = {
  list: Api.create('/sys/menu/list', 'get'),
  tree: Api.create('/sys/menu/tree', 'get'),
}
export const deptApi = {
  tree: Api.create('/sys/dept/tree', 'get'),
}
