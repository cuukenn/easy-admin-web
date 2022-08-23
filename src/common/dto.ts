export abstract class BaseDto {
  id?: number
  createTime?: string
  updateTime?: string
}
export interface IResult {
  code?: number
  message?: string
}
export class ResultDto implements IResult {
  public static readonly OK: IResult = {
    code: 200,
    message: 'success',
  }
  code?: number
  message?: string
  data?: any
  public static buildEmpty(): ResultDto {
    return new ResultDto()
  }
  public static build(data: any): ResultDto {
    const dto = new ResultDto()
    dto.code = ResultDto.OK.code
    dto.message = ResultDto.OK.message
    dto.data = data
    return dto
  }
  isOk(): boolean {
    return this.code === ResultDto.OK.code
  }
  hasData(): boolean {
    return this.isOk() && this.data != void 0
  }
}
const DEFAULT_PAGE_NUMBER = 1
const DEFAULT_PAGE_SIZE = 10
export interface Page {
  pageNum?: number
  pageSize?: number
}
export class PageWrapper<T> implements Page {
  pageNum?: number
  pageSize?: number
  pageTotal?: number
  items?: Array<T>
  public static build(items: Array<any>): PageWrapper<any> {
    const dto = new PageWrapper<any>()
    dto.pageNum = DEFAULT_PAGE_NUMBER
    dto.pageSize = DEFAULT_PAGE_SIZE
    dto.pageTotal = items.length
    dto.items = items
    return dto
  }
}
export class PageQuery implements Page {
  pageNum = DEFAULT_PAGE_NUMBER
  pageSize = DEFAULT_PAGE_SIZE
}
export interface Tree {
  label: string
  children?: Tree[]
}
