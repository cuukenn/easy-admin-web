import Mock from 'mockjs'
import { MockParams } from './typing'
import user from './data/user'
import role from './data/role'
import menu from './data/menu'
import dept from './data/dept'
import onlineUser from './data/online-user'
const mocks = [...user, ...role, ...menu, ...dept, ...onlineUser]
export function mockXHR() {
  let item: MockParams
  for (item of mocks) {
    Mock.mock(new RegExp(item.url), item.type || 'get', item.response)
  }
}
