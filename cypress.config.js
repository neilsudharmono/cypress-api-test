const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 80000,
  responseTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://{{base}}/',
    excludeSpecPattern: ['*.hot-update.js', '*.method.js'],
    experimentalSessionAndOrigin: true
  },
})
