import { After, Before } from "@badeball/cypress-cucumber-preprocessor"

/**
 * Mocha hook that will execute before each scenario
 */
beforeEach(() => {
    cy.log("This will be executed before each scenario using mocha...")
    cy.visit(Cypress.env("baseUrl"));
})

/**
 * Cucumber json hook that will execute before each scenario
 */
Before(()=>{
    cy.log("This will be executed before each scenario using cucumber...")
    cy.setCookie('user_consents', '{"marketing":false,"essential":true}')
    cy.clearAllLocalStorage();
})

/**
 * This hook will be executed only for scenarios with @regression and @contact-us
 */
Before({ tags: "@regression and @contact-us" }, ()=>{
    cy.log("Executing login regression tests...")
})

/**
 * After hook will be excuted after each scenario
 */
After(()=>{
    cy.log("I will be executing after each scenario....");
    cy.clearAllCookies();
})
