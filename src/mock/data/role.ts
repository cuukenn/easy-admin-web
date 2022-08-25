import Mock from 'mockjs'
import { ResultDto, PageWrapper } from '@/common/dto'
import { Role } from '@/views/system/dto'
const items: Array<Role> = []

const admin = new Role()
admin.id = 1
admin.role = 'ADMIN'
admin.name = '管理员'
admin.createTime = Mock.Random.date()
admin.updateTime = Mock.Random.date()
items.push(admin)
const user = new Role()
user.id = 2
user.role = 'USER'
user.name = '普通用户'
user.createTime = Mock.Random.date()
user.updateTime = Mock.Random.date()
items.push(user)

export default [
  {
    url: '/sys/role/list',
    type: 'get',
    response: () => {
      return ResultDto.build(PageWrapper.build(items))
    },
  },
]
