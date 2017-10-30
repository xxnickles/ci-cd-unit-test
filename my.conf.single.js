// Overwrites for the base configuration for karma
var defaultConfig = require('./.config/config.base')
module.exports = function (config) {
  config.set({ ...defaultConfig,
    ...{
      singleRun: false,      
      files: [
        './src/*.js',
        './test/app.spec.js'
      ]
    }
  });
};