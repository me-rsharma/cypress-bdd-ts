# Best Practices

## Node Scripts

The `cypress.config.ts` file can get bloated pretty fast, especially when setting up tasks or resolving configurations. This is why I started splitting these into their own files and add them to scripts folder.

A nice bonus in the TypeScript world is the ability to define paths. This remove the headache of resolving relative paths in your project. Let’s say you have a path defined in your `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"],
    "baseUrl": "./",
    "paths": {
      "@fixtures/*": ["cypress/fixtures/*"]
    },
    "resolveJsonModule": true
  }
}
```

Now, You can import a fixture file in your test like this:

```ts
import boardSchema from "@fixtures/boardSchema.json";

it("board returns proper JSON schema", () => {
  cy.api({
    url: `/api/boards/1`,
  })
    .its("body")
    .should("jsonSchema", boardSchema);
});
```

### Configuration switching

It is important that test work on multiple different environments. To make things easy, I usually create a config folder that contains .json files with all the environment-specific variables such as baseUrl, url of the API, or some other information that may be used during the test. These get fed into env object from the .json file and can easily be accessed by Cypress.env()

The following setup will take care of adding the correct information to the project:

```ts
import { defineConfig } from "cypress";

export default defineConfig({
  // other config attributes
  setupNodeEvents(on, config) {
    // if version not defined, use local
    const version = config.env.version || "local";
    // load env from json
    config.env = require(`./cypress/config/${version}.json`);
    // change baseUrl
    config.baseUrl = config.env.baseUrl;

    return config;
  },
});
```

Besides having the configuration set up in separate .json, there is information that should not be commited to the repositories, like passwords, api keys, etc. These are usually part of environment and are passed through CLI.

To make things easier, I use dotenv package that takes care of management of env variables by using .env file.

`ADMIN_KEY="1234-5678-abcd-efgh"`

`npx cypress open --env version="production"`

### Tagging Tests

As soon as the project grows, it is pretty much impossible to run all tests on every commit. Splitting test into categories can be easily achievedy by using `@cypress/grep` plugin. It enables you to run a subset of tests based on the test name or based on tags.

First and foremost, `@smoke` category is created that takes care of the most essential scenarios. The smoke set can sometimes be a separate folder, but I personally prefer for the tests to live in their own feature folders.

```js
it("creates a new board", { tags: ["@smoke"] }, () => {
  // test
});
```

`npx cypress run --env grepTags='@smoke'`

https://github.com/cypress-io/cypress/issues/3178

`npx cypress run  --env version="production" --env TAGS="@login" --headed` -- consider only one env 
`npx cypress run  --env version=production,TAGS=@login --headed` - this will work

`npx cypress run  --env version=production,TAGS='@contact-us and not @negative' --headed`

`npx cypress run  --env version=production,TAGS='(@regression or not @negative) and not @login' --headed`

```json
"spec:run": "cross-env-shell SPEC=\"cypress/e2e/features/login.feature\" npx cypress run --env version='production' --spec $SPEC" -- not work
```


This will work in 
`package.json`
`"spec:run": "cross-env-shell npx cypress run --env version='production' --spec $SPEC"`
Then run using command line or terminal
`npm run spec:run --env  cypress/e2e/features/contactus.feature`

`"run:test:report": "npm run report:clean && npm run all:run && npm run report"` -- not working npm run report
so added one more time
`"run:test:report": "npm run report:clean && npm run all:run && npm run report || npm run report"`,



https://github.com/cypress-io/cypress-realworld-app

https://stackoverflow.com/questions/73018000/argument-type-string-is-not-assignable-to-parameter-type-keyof-chainable-cyp


https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide

https://filiphric.com/how-to-structure-a-big-project-in-cypress