import Mock from 'mockjs'
import { ResultDto, PageWrapper } from '@/common/dto'
import { OnlineUser } from '@/views/monitor/dto'
const lists: Array<OnlineUser> = []
for (let i = 0; i < 10; i++) {
  const item = new OnlineUser()
  item.sessionId = Mock.Random.id()
  item.username = Mock.Random.name()
  item.deptname = '总部'
  item.host = Mock.Random.ip()
  item.loginTime = Mock.Random.date()
  item.loginMachineType = 'Chrome'
  item.loginLocation = Mock.Random.city()
  lists.push(item)
}
export default [
  {
    url: '/monitor/online-user/list',
    type: 'get',
    response: () => {
      return ResultDto.build(PageWrapper.build(lists))
    },
  },
]
