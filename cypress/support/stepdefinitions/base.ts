import { When } from "@badeball/cypress-cucumber-preprocessor";

/**
 * We can place common commands or generic commands in this base.ts file
 */
When("I waited for {int} seconds", function (seconds: number) {
    cy.wait(seconds * 1000);
});