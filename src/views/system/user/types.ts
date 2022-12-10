export declare interface UserBaseVo {
  username?: string
  nickname?: string
  gender?: any
  avatar?: string
  location?: string
  email?: string
}
export declare interface UserResVo extends UserBaseVo {
  id?: any
  status?: boolean
  createdTime?: string
  lastModifiedTime?: string
}
export declare interface UserCreateReqVo extends UserBaseVo {}
export declare interface UserUpdateReqVo extends UserBaseVo {
  id?: any
}
