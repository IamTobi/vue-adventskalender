const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.sass$/,
        exclude: /(node_modules)/,
        loader: 'sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      { 
        test: /\.(woff2?|ttf|eot|svg)$/, 
        loader: 'url?limit=10000' 
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'jquery$': 'jquery/src/jquery'
    }
  }
}