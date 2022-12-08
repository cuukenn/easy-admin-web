import Api from '@/api/api'
export const api = {
  get: Api.create('/menu/get', 'get'),
  list: Api.create('/menu/list', 'get'),
  update: Api.create('/menu/update', 'put'),
  create: Api.create('/menu/create', 'post'),
  delete: Api.create('/menu/delete', 'delete'),
  types: Api.create('/menu/types', 'get'),
  treeSelect: Api.create('/menu/tree-select', 'get'),
  updateStatus: Api.create('/menu/update/status', 'put'),
}
