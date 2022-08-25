import { BaseDto } from '@/common/dto'

export class OnlineUser extends BaseDto {
  sessionId?: string
  username?: string
  deptname?: string
  host?: string
  loginTime?: string
  loginLocation?: string
  loginMachineType?: string
}
