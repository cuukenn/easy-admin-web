import Mock from 'mockjs'
import { ResultDto, PageWrapper } from '@/common/dto'
import { Menu } from '@/views/system/dto'
const items: Array<Menu> = []
for (let i = 0; i < 10; i++) {
  const item = new Menu()
  item.name = 'menue-' + i
  item.index = i
  item.status = Mock.Random.boolean()
  item.createTime = Mock.Random.date('yyyy-MM-dd HH:mm:ss')
  items.push(item)
}
export default [
  {
    url: '/sys/menu/list',
    type: 'get',
    response: () => {
      return ResultDto.build(PageWrapper.build(items))
    },
  },
]
