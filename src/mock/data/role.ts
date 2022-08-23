import { ResultDto, PageWrapper } from '@/common/dto'
import { Role } from '@/views/system/dto'
const items: Array<Role> = []

const admin = new Role()
admin.role = 'ADMIN'
items.push(admin)
const user = new Role()
user.role = 'ADMIN'
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
