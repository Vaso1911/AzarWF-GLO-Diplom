const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    admin: './admin.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
}
