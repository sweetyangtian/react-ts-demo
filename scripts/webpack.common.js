const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { isDev, PROJECT_PATH } = require("./constant");

module.exports = {
    entry: {
        app: resolve(PROJECT_PATH, "./src/app.js"),
    },
    output: {
        filename: `js/[name]${isDev ? "" : ".[hash:8]"}.js`,
        path: resolve(PROJECT_PATH, "./dist"),
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: false, // 默认就是 false, 若要开启，可在官网具体查看可配置项
                            sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
                        },
                    },
                    "postcss-loader"
                ],
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: isDev,
                            importLoaders: 1, // 需要先被 less-loader 处理，所以这里设置为 1
                        },
                    },
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: isDev,
                        },
                    },
                   
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(PROJECT_PATH, "./public/index.html"),
            filename: "index.html",
            cache: false,
            minify: isDev
                ? false
                : {
                      collapseWhitespace: true,
                      removeComments: true,
                      removeRedundantAttributes: true,
                      removeScriptTypeAttributes: true,
                      removeStyleLinkTypeAttributes: true,
                      useShortDoctype: true,
                      collapseInlineTagWhitespace: true,
                      collapseBooleanAttributes: true,
                      removeAttributeQuotes: true,
                      minifyCSS: true,
                      minifyJS: true,
                      minifyURLs: true,
                      html5: true,
                  },
        }),
    ],
};
