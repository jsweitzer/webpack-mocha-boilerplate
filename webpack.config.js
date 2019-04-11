const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src',
    test: 'mocha-loader!./test/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
      extensions: ['.js', '.html']
  }
}