const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  mode: 'development', // 设置mode
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test:/\.vue$/i,
        use:'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.less$/i,
        loader: "less-loader", // 将 Less 文件编译为 CSS 文件
      },
    ],
  },
  plugins:[
    new VueloaderPlugin()
  ],
  resolve:{
    extensions: ['.js', '.vue', '.json'],
    alias:{
      '@': resolve('src'),
    },
  }
};

function resolve (dir) {
  return path.join(__dirname, '..', dir)
  }