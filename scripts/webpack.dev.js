const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '127.0.0.1'|| process.env.HOST, // 指定 host，不设置的话默认是 localhost
    port: 9000 || process.env.PORT, // 指定端口，默认是8080
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    overlay: true, // 出现编译器错误或警告时，取消在浏览器中全屏覆盖显示，只在编译器显示
    clientLogLevel: 'silent', // 日志等级：关闭日志
    stats: {
        all: undefined,
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
        hash: false,
        timings: false,
        assets: false,
        entrypoints: false,
        version: false,
        builtAt: false,
    }
    
  }
})
