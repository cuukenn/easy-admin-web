const { defineConfig } = require('@vue/cli-service')
const proxyTarget = 'http://127.0.0.1:48080'
module.exports = defineConfig({
  transpileDependencies: true,
  //see: https://webpack.js.org/configuration/dev-server
  devServer: {
    port: 5173,
    // the proxy setting: to solve CORS
    proxy: {
      '/admin-api': {
        target: proxyTarget, // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        headers: {
          referer: proxyTarget,
        },
      },
      '/swagger-ui': {
        target: proxyTarget, // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        headers: {
          referer: proxyTarget,
        },
      },
      '/v3/api-docs': {
        target: proxyTarget, // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
        headers: {
          referer: proxyTarget,
        },
      },
    },
  },
})
