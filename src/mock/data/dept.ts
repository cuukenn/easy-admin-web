import { ResultDto, Tree } from '@/common/dto'
const data: Tree[] = [
  {
    label: '总部',
    children: [
      {
        label: '上海分部',
        children: [
          {
            label: '浦东营业部',
          },
          {
            label: '松江营业部',
          },
        ],
      },
      {
        label: '北京分部',
        children: [
          {
            label: '东城区营业部',
          },
        ],
      },
      {
        label: '江西分部',
        children: [
          {
            label: '南昌营业部',
            children: [
              {
                label: '经开区营业部',
              },
              {
                label: '新建县营业部',
              },
            ],
          },
          {
            label: '上饶营业部',
          },
        ],
      },
    ],
  },
]
export default [
  {
    url: '/sys/dept/tree',
    type: 'get',
    response: () => {
      return ResultDto.build(ResultDto.build(data))
    },
  },
]
