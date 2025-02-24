const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber());
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    specPattern:"cypress/e2e/*.feature",
  },
});
