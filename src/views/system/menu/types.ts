export declare interface MenuBaseVo {
  parentId?: any
  name?: string
  icon?: string
  number?: number
  routerPath?: string
  componentPath?: string
  permission?: string
  type?: any
}
export declare interface MenuResVo extends MenuBaseVo {
  id?: any
  hasSubMenu?: boolean
  status?: boolean
  createTime?: string
}
export declare interface MenuCreateReqVo extends MenuBaseVo {}
export declare interface MenuUpdateReqVo extends MenuBaseVo {
  id?: any
}
