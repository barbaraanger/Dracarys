// webpack.config.js

module.exports = {
    // ... other Webpack configuration ...
  
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  };
  