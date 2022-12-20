export declare interface ApiResultResVo {
  code?: number
  message?: string
  data?: any
}
export declare interface ApiPageReqVo {
  pageNum?: number
  pageSize?: number
  orderColumn?: string
  orderDesc?: boolean
}
export declare interface InvokeReqVo {
  id?: any
  ids?: Array<any>
}
