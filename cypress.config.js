const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      "reportDir": "test-results/mochawesome",
      "charts": true,
      "embeddedScreenshots": true,
      "inlineAssets": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "autoOpen": true,
      "reportTitle": "Basic Calculator",
      "reportPageTitle": "Cypress Automation Result",
      "code": true,
      "timestamp": false
    },


    // video reporting
    video: true,
    videoUploadOnPasses: false,
    videosFolder: 'test-results/video',


    // screenshots reporting
    screenshotOnRunFailure: true,
    screenshotsFolder: 'test-results/screenshots',


    // base url of the application
    baseUrl: 'https://testsheepnz.github.io/',


    specPattern: [
      'cypress/e2e/*',
    ],

  },
});
