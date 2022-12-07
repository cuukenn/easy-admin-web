export declare interface RoleBaseVo {
  name?: string
  permission?: string
  description?: string
}
export declare interface RoleResVo extends RoleBaseVo {
  id?: any
  status?: boolean
  createdTime?: string
  lastModifiedTime?: string
}
export declare interface RoleCreateReqVo extends RoleBaseVo {}
export declare interface RoleUpdateReqVo extends RoleBaseVo {
  id?: any
}
