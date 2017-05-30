var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true }},
            { loader: 'sass-loader', options: { sourceMap: true }}
          ]
        })
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss"]
  },
  plugins: [
      new ExtractTextPlugin('styles.css'),
  ],
  devtool: "source-map"
};
