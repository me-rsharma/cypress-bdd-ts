const report = require('multiple-cucumber-html-reporter');
// Import the module
// import { generate } from 'multiple-cucumber-html-reporter';
// require('dotenv').config();


const customData = {
  title: 'Run info',
  data: [
    {
      label: 'Project',
      value: 'Webdriver University Automation'
    },
    {
      label: 'Generated on:',
      value: new Date().toUTCString()
    },
    // {
    //   label: 'Reporter:',
    //   value: '<a href="https://www.npmjs.com/package/multiple-cucumber-html-reporter" ' +
    //     'target="_blank">multiple-cucumber-html-reporter</a>'
    // }
  ]
};

report.generate({
  jsonDir: 'cypress/reports/cucumber/',
  reportPath: 'cypress/reports/cucumber/html/',
  displayDuration: true,
  removeFolders: true,

  // useCDN: true,
  // customStyle: 'https://cdn.tailwindcss.com',
  // overrideStyle: 'https://cdn.tailwindcss.com',

  pageTitle: 'Webdriver University Test Automation',
  reportName: 'Website Automation Test Report',
  openReportInBrowser: true,
  pageFooter:
    '<div class="created-by"><p>Powered by &copy; <a href="https://explorechoice.org/" target="_blank">Cerence</a></p></div>',
});