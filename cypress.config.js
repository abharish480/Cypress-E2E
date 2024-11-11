const { defineConfig } = require("cypress");
const { beforeRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 2
  },
 reporter: 'cypress-mochawesome-reporter',
  video:false,
  overwrite: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: true,
    videoOnFailOnly:true
  },

  e2e: {
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        await beforeRunHook(details);
      });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
