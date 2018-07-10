const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");  

const BASE_DIR = path.resolve(__dirname);
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

console.log('NODE ENV: ' + process.env.NODE_ENV);
console.log('BASE DIR : ' + BASE_DIR);
console.log('BUILD DIR : ' + BUILD_DIR);
console.log('SRC DIR : ' + APP_DIR);

let cleanOptions = {
  root:     BASE_DIR,
  verbose:  true,
  dry:      false
};

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/main.js',
  output: {
    path: BUILD_DIR,
    publicPath: '/dist/',
    filename: 'js/build.js'
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [ APP_DIR, require.resolve("bootstrap-vue") ]
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]?[hash]',
          publicPath: `${APP_DIR}/assets/img`,
        },
        include: `${APP_DIR}/assets/img`
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist'], cleanOptions),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/build.css",
      chunkFilename: "css/[id].css"
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  
  module.exports.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
    ]
  }
};