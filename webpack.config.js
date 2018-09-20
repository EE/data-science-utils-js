var webpack = require('webpack');

// Options for Builds
var buildVar = process.argv.indexOf('-var') > -1;
var minify = process.argv.indexOf('-p') > -1;

// Different build types
var outputName = 'lib/data-science-utils';
outputName = outputName + (buildVar ? '-var' : '');
outputName = outputName + (minify ? '.min.js' : '.js');


var plugins = [
  new webpack.optimize.DedupePlugin()
]
if (minify) plugins.push(new webpack.optimize.UglifyJsPlugin());


module.exports = {
  entry: './src/index.js',

  module: {
    preLoaders: [
      { test: /\.(js|jsx)?$/, include: /src/, loaders: ['eslint?{fix:true}']}
    ],
    loaders: [
      { test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },

  output: {
    filename: outputName,
    libraryTarget: buildVar ? 'var' : 'umd',
    library: 'data-science-utils'
  },

  plugins: plugins,

  eslint: {
      failOnWarning: false,
      failOnError: true,
      configFile: './.eslintrc.yml'
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
