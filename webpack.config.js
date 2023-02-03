const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  resolve: {
    fallback: {
        "stream": require.resolve("stream-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "buffer": require.resolve("buffer/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mailparser.js',
    library: "mailParser",
  },
};