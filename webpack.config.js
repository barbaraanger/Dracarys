// webpack.config.js
const path = require("path");
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

module.exports = {
    entry: "./src/",
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  };
  