export const API_PREFIX = '/api'
const config = {
  baseApiUrl: `${(window as any).globalConfig.BaseApiUrl}${API_PREFIX}`,
}
export default config
