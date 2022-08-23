export function getQueryString(name: string): string | null {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substring(1).match(reg)
  if (r != null) {
    return decodeURI(r[2])
  }
  return null
}
