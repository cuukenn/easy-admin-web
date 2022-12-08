import Api from '@/api/api'
export const api = {
  get: Api.create('/role/get', 'get'),
  list: Api.create('/role/list', 'get'),
  update: Api.create('/role/update', 'put'),
  create: Api.create('/role/create', 'post'),
  delete: Api.create('/role/delete', 'delete'),
  updateStatus: Api.create('/role/update/status', 'put'),
}
