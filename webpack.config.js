const path = require('path');

module.exports = {
  // Set the entry point to your library's main file
  entry: './src/index.js',

  // Define output settings
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // Export as a library that can be imported by other projects
    library: 'Cleothena',
    libraryTarget: 'umd',
    // This setting makes your library compatible with various module systems
    globalObject: 'this',
  },

  // Resolve file extensions so you can import without specifying them
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Configure module rules for processing different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Process SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/, // Process SVG files as React components
        use: ['@svgr/webpack'],
      },
    ],
  },

  // Mark React and React-DOM as external, so they are not bundled in your library
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },

  // Set mode to production for optimized output (minification, etc.)
  mode: 'production',
};
