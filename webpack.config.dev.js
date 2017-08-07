import webpack from 'webpack';
import path from 'path';

export default {
  debug: true, //displays debug info
  devtool: 'cheap-module-eval-source-map',
  noInfo: false, //webpack will display a list of all the files it's bundling
  entry: [
    'eventsource-polyfill', //necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true',
    './src/index' //our app's entry point needs to be last
  ],
  target: 'web',
  output: { //tells webpack where to create a dev bundle
    path: __dirname + "/dist", //not generating physical files, only going to serve files in memory
    // __dirname variable gives current directory
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./src"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
