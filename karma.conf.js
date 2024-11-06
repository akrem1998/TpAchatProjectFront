// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    // Set hostname to the desired IP address (i.e., 193.95.57.13)
    hostname: '193.95.57.13',  // This will make Karma server accessible from this IP

    port: 9876,  // Port to listen for connections (use 9876 or another port if necessary)

    urlRoot: '/karma/',

    browsers: ['ChromeHeadless'],  // Using ChromeHeadless for CI environment

    client: {
      jasmine: {
        // Jasmine configuration (optional)
      },
      clearContext: false // Keep Jasmine Spec Runner visible
    },

    jasmineHtmlReporter: {
      suppressAll: true // Remove duplicated traces
    },

    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/crudtuto-Front'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    reporters: ['progress', 'kjhtml'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};
