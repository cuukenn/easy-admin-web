import Api from '@/api/api'
export const api = {
  get: Api.create('/user/get', 'get'),
  list: Api.create('/user/list', 'get'),
  update: Api.create('/user/update', 'put'),
  create: Api.create('/user/create', 'post'),
  delete: Api.create('/user/delete', 'delete'),
  updateStatus: Api.create('/user/update/status', 'put'),
  genderTypes: Api.create('/user/gender/types', 'get'),
}
