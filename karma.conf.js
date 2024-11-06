module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-webpack') // Add the webpack plugin here
    ],
    // Set hostname to the desired IP address (i.e., 193.95.57.13)
    hostname: '193.95.57.13',  // This will make Karma server accessible from this IP

    port: 9876,  // Port to listen for connections (use 9876 or another port if necessary)

    urlRoot: '/karma/',

    // Browser configuration for CI environment
    browsers: ['ChromeHeadless'],  // Using ChromeHeadless for CI environment

    // Adjusting client settings
    client: {
      jasmine: {
        // Jasmine configuration (optional)
      },
      clearContext: false // Keep Jasmine Spec Runner visible
    },

    // Suppress all duplicate traces in the HTML reporter
    jasmineHtmlReporter: {
      suppressAll: true // Remove duplicated traces
    },

    // Configure the coverage reporter
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/crudtuto-Front'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    // Enable the 'progress' reporter and HTML reporter for better visibility
    reporters: ['progress', 'kjhtml'],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,

    // Webpack preprocessor configuration
    preprocessors: {
      '**/*.js': ['webpack'], // Ensure webpack processes your JS files
    },
    webpack: {
      mode: 'development', // Example webpack config for development
      devtool: 'inline-source-map',
    },

    // Increase timeout for disconnect to 60 seconds
    browserDisconnectTimeout: 60000,  // 60 seconds timeout for disconnect
  });
};
