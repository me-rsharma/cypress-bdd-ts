### ISSUE:

```json
    "paths": {
      "@fixtures/*": ["cypress/fixtures/*"]
    },
```

`import contactus from "@fixtures/contactus.json";`

https://github.com/cypress-io/cypress/issues/17788
https://stackoverflow.com/questions/67255690/error-when-running-feature-file-cant-walk-dependency-graph

### Generating Reports in Cypress Using Cucumber Reporting

Reporting
Cucumber plugin for Cypress comes with a variety of options for setting up reporters. I’m goint to show you the simplest one - HTML reporter.

Pretty much all you need to do is to set up your configuration:

```json
{
  "html": {
    "enabled": true
  }
}
```
By default report gets generated at project folder level. To override default behavior we have to use

```json
{
  "html": {
    "enabled": true,
    "output": "cypress/reports/cucumber-report/cucumber-report.html"
  }
}
```

`npm install rimraf --save-dev`

