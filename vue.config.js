module.exports = {
  // 开发代理配置
  devServer: {
    //proxy: 'https://cnodejs.org/api/v1'
    proxy: {
      '/api': {
        target: 'https://cnodejs.org/api/v1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}