const isDev = process.env.NODE_ENV !== 'production'
module.exports = ({ file, options, env }) => ({
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            grid: true,
            flexbox: 'no-2009'
          },
          stage: 3,
        }),
        require('postcss-normalize'),
    ],
    sourceMap: isDev
  })