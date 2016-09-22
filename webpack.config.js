import Webpack from 'webpack';
import Path from 'path';

const BUILD_DIR = Path.resolve(__dirname, 'client/build');
const APP_DIR = Path.resolve(__dirname, 'client');

const config = {
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
    ],
  },
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
};

module.exports = config;
