import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", function(){
    //cy.visit(Cypress.env("baseUrl"));
});

Then("I should see a search bar", function(){
    cy.get("input[type=text]")
        .should("have.attr", 'placeholder')
        .and("match", /Search the web without being tracked|Search without being tracked/);
});