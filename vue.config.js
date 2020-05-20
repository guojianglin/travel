const path = require('path')
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
        logLevel: 'debug'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.join(__dirname, 'src/assets/styles')
      }
    }
  }
}
