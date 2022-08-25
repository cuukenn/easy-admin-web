import { BaseDto } from '@/common/dto'

export class MenuItem extends BaseDto {
  index?: string
  title?: string
  icon?: string
  subMenus?: Array<MenuItem>
}
export class Menu extends BaseDto {
  name?: string
  index?: number
  status?: boolean
}
export class User extends BaseDto {
  username?: string
  nickname?: string
  tel?: string
  enabled?: boolean
  locked?: boolean
}
export class Role extends BaseDto {
  role?: string
  name?: string
}
