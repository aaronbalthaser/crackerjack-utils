const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.ts'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      tests: path.resolve(__dirname, '../tests')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/env'],
            plugins: []
          }
        }
      },
      {
        test: /\.(ts)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false
            }
          },
          {
            loader: "ts-loader",
            options: {
              configFile: require.resolve("../tsconfig.json"),
              context: __dirname,
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
