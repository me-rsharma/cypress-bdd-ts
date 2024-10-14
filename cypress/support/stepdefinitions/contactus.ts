///<reference types="cypress"/>

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import contactus from "@fixtures/contactus.json";
import contactus from "../../../cypress/fixtures/contactus.json";
//import { generateRandomAlphabeticText } from "cypress/utils/generateRandomText";

When("I enter the first name", function () {
    cy.get("input[name='first_name']").type(Cypress.env("username"));
});

When("I enter the first name {string}", function (firstName: string) {
    cy.get("input[name='first_name']").type(firstName);
});

When("I enter the last name", function () {
    //const lastname = generateRandomAlphabeticText(10);
    const lastname = "Das";
    cy.log(`Last name generated: ${lastname}`);
    cy.get("input[name='last_name']").type(lastname);
});

When("I enter the last name {string}", function (lastName: string) {
    //const lastname = generateRandomAlphabeticText(10);
    const lastname = lastName;
    cy.log(`Last name generated: ${lastname}`);
    cy.get("input[name='last_name']").type(lastname);
});

When("I enter the email address", function () {
    cy.get("input[name='email']").type(contactus.email);
});

When("I enter the email address {string}", function (emailAddress: string) {
    cy.get("input[name='email']").type(emailAddress);
});

When("I add the comments", function () {
    cy.get("textarea[name='message']").type("Hare Krishna Hare Krishna Krishna Krishna Hare Hare...");
});

When("I add the comments {string}", function (comments: string) {
    cy.get("textarea[name='message']").type(comments);
});

When("I click on submit button", function () {
    cy.get("#form_buttons").find("input").eq(1).click();
});

Then("I should see the success message", function () {
    Cypress.config("defaultCommandTimeout", 6000);
    cy.get("#contact_reply h1").should("have.text", "Thank You for your Message!");
});

Then("I should see the success message {string}", function (message: string) {
    Cypress.config("defaultCommandTimeout", 6000);
    cy.get("#contact_reply h1").should("have.text", message);
});


Then("I should see the submission message {string}", function (message: string) {
    Cypress.config("defaultCommandTimeout", 6000);
    cy.contains(message);
});


Then("I should see the failure message", function () {
    Cypress.config("defaultCommandTimeout", 6000);
    cy.get("body").should("include", /Error: all fields are required/);
});
