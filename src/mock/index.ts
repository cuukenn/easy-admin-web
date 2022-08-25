import Mock from 'mockjs'
import { API_PREFIX } from '@/common/config'
import { MockParams } from './typing'
import user from './data/user'
import role from './data/role'
import menu from './data/menu'
import dept from './data/dept'
import onlineUser from './data/online-user'
const mocks = [...user, ...role, ...menu, ...dept, ...onlineUser]
//设置延时时间
Mock.setup({
  timeout: '300',
})
export function mockXHR() {
  let item: MockParams
  for (item of mocks) {
    Mock.mock(new RegExp(API_PREFIX + item.url), item.type || 'get', item.response)
  }
}
