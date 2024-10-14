///<reference types="cypress"/>

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageobjects/home.page";


const homepage = new HomePage();


Given("I visit webdriveruniversity homepage", function () {
    //cy.visit("https://www.webdriveruniversity.com/");
    homepage.navigate("");
    homepage.getPageTitle().should("include", "WebDriverUniversity");
});

Given("I click on contactus link", () => {
    // cy.get("#contact-us").invoke("removeAttr", "target");
    // cy.get(".section-title h1").contains("CONTACT US").click();
    // replacing with custom command
    //cy.openlinkinsametab("#contact-us");
    homepage.openContactUsLinkInSameTab();
});

Given("I click on login link", () => {
    //cy.openlinkinsametab("#login-portal");
    // cy.get("#login-portal").invoke("removeAttr", "target");
    // cy.get(".section-title h1").contains("LOGIN PORTAL").click();
    homepage.openLoginLinkInSameTab();
});