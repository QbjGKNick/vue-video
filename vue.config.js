const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-video/' : '/',
  // devServer: {
  //   proxy: {
  //     '/api/vms/': {
  //       target: 'http://172.16.1.221:8060',
  //       changeOrigin: true
  //     }
  //   }
  // }
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '@': resolve('src')
        }
      }
    }
  }
}
