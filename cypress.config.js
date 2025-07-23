const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,

  reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
  },

  e2e: {
    baseUrl: 'http://localhost:4200/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

