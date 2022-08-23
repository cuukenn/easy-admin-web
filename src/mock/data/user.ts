import Mock from 'mockjs'
import { ResultDto, PageWrapper } from '@/common/dto'
import { User } from '@/views/system/dto'
const lists: Array<User> = []
for (let i = 0; i < 10; i++) {
  const user = new User()
  user.username = Mock.Random.name()
  user.nickname = Mock.Random.name()
  user.enabled = Mock.Random.boolean()
  user.locked = Mock.Random.boolean()
  lists.push(user)
}
export default [
  {
    url: '/sys/user/list',
    type: 'get',
    response: () => {
      return ResultDto.build(PageWrapper.build(lists))
    },
  },
]
