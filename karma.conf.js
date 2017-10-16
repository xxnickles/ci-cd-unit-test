var path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    browsers: ['Chrome'],   
    files: [
      './src/*.js',
      './test/*.js'
    ],
    reporters: ['spec'],   
    // optional depending on how the js library (app.js in our case) works.
    // If the library doesn't require a pre-existing markup to work, this line is not required
    // In our example, the code depends on an existing HTML markup to work, otherwise, it is going to
    // throw an error 
    customContextFile:path.resolve('./test/fixture.html'),   
    client: {
      captureConsole: true
    }
  });
};