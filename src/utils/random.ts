/**
 * 随机生成手机号
 * @returns tel
 */
export const randomTel = (): string => {
  const numeric = '0123456789'
  const mobile_prefix = ['132', '135', '136']
  const random = (len: number, list: any) => {
    if (len <= 1) {
      len = 1
    }
    let s = ''
    const n = list.length
    if (typeof list === 'string') {
      while (len-- > 0) {
        s += list.charAt(Math.random() * n)
      }
    } else if (list instanceof Array) {
      while (len-- > 0) {
        s += list[Math.floor(Math.random() * n)]
      }
    }
    return s
  }
  return random(1, mobile_prefix) + random(8, numeric)
}
