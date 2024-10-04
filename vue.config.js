const path = require('path');

console.log('vue.config.js is being used!'); // Debug log

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          strictMath: true,
          noIeCompat: true,
        },
      },
    },
  },
};