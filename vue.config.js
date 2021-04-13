const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
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
