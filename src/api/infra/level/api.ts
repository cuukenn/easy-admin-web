import Api from '@/api/api'
export const api = {
  page: Api.create('/log/level/page', 'get'),
  update: Api.create('/log/level/update', 'put'),
  reset: Api.create('/log/level/reset', 'put'),
}
