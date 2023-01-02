import Api from '@/api/api'
export const api = {
  page: Api.create('/operation-log/page', 'get'),
}
