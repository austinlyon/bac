// const path = require('path');
const config = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  entry: './client/index.jsx',
  output: {
    path: './client/build',
    filename: 'bundle.js',
  },
};

module.exports = config;
