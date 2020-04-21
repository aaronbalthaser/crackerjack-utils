  
const path = require('path');

const merge = require('webpack-merge');
const commonConfig = require('./common.config');

module.exports = merge(commonConfig, {
  entry: {
    main: './src/index.ts',
    add: './src/add.ts',
    subtract: './src/subtract.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    library: 'crackerjack-utils',
    libraryTarget: 'umd',
  },
  mode: 'production'
});
