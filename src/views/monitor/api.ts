import Api from '@/common/Api'
export const onlineUserApi = {
  list: Api.create('/monitor/online-user/list', 'get'),
}
