import { ResultDto } from '@/common/dto'

export interface MockParams {
  url: string
  type: string
  data?: any
  params?: any
  response(option?: any): ResultDto
}
