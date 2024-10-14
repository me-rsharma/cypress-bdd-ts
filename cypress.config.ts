import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import { preprocessor } from "@badeball/cypress-cucumber-preprocessor/browserify";


async function setupNodeEvents(on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
  const version = config.env.version || 'local'
  // load env from json
  config.env = require(`./cypress/config/${version}.json`);
  // change baseUrl
  config.baseUrl = config.env.baseUrl
  //read ACCESS_KEY from .env file
  config.env.ACCESS_KEY = process.env.ACCESS_KEY;
  config.env.username = process.env.username;
  // this is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    preprocessor(config, {
      typescript: require.resolve("typescript"),
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


export default defineConfig({
  // other config attributes
  e2e: {

    specPattern: "cypress/e2e/features/**/*.{js,jsx,ts,tsx,feature}",
    setupNodeEvents,
  }

});
