//去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// seo
// const path = require('path')
// const PrerenderSpaPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

module.exports = {
  devServer: {
    port: 9005,
    disableHostCheck: true, // 允许nginx代理
    proxy: 'http://10.0.1.5:3000/api',
  },
  assetsDir: 'assets',
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: config => {
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
      // new PrerenderSpaPlugin({
      //   staticDir: path.join(__dirname, './dist'),
      //   routes: ['/detail', '/login', '/register', '/staticPage', '/article', '/guide'],  
      //   renderer: new Renderer({
      //     inject: {
      //       foo: 'bar'
      //     },
      //     headless: false,
      //     renderAfterDocumentEvent: 'render-event'
      //   })
      // }),
      // new BundleAnalyzerPlugin()
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
    config.externals = {
      vue: "Vue",
      // vuex: "Vuex",
      "vue-router": "VueRouter",
      "element-ui": "ELEMENT"
    }
  }
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: "src/main.js",
  //     // 模板来源
  //     template: "public/index.html", // 这里用来区分加载那个 html
  //     // 在 dist/index.html 的输出
  //     filename: "index.html",
  //     chunks: ["chunk-vendors", "chunk-common", "index"]
  //   }
  // }
}
