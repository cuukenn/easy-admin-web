/**
 *
 * @param fmt 时间格式化pattern
 * @param date 带格式化时间
 * @returns
 */
export const date2string = (fmt: string, date: Date): string => {
  let ret
  const opt = {
    'y+': date.getFullYear().toString(), // 年
    'M+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'm+': date.getMinutes().toString(), // 分
    's+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  } as any
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
    }
  }
  return fmt
}
/**
 *
 * @param fmt 时间格式化pattern
 * @param dateStr 时间字符串
 * @returns
 */
export const datestr2string = (fmt: string, dateStr: string): string => {
  return date2string(fmt, new Date(dateStr))
}
