import { MenuBaseVo } from '@/views/system/menu/types'
export declare interface AuthMenuResVo extends MenuBaseVo {
  id?: any
  children?: Array<AuthMenuResVo>
}
