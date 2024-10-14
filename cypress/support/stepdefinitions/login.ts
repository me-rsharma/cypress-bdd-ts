import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

var stub: any;

When("I enter a username {word}", function (userName: string) {
    cy.get("#text").should("have.attr", "placeholder").and("match", /Username/);
    cy.get("#text").type(userName);
});

When("I enter a password {word}", function (password: string) {
    cy.get("#password").should("have.attr", "placeholder").and("match", /Password/);
    cy.get("#password").type(password);
});

When("I click on login button", function () {
    // before alert even is triggered just intitialize the stub
    stub = cy.stub();
    cy.on("window:alert", stub);
    cy.get("#login-button").should("be.enabled").click();
});

Then("I should see the login notification {string}", function (message: string) { 
    //handle the alert here
    cy.on("window:alert", (text)=>{
        console.log(text);
        expect(text).to.be.equal(message); // this is not failing the test case so seems not working
    })
});

Then("I should see the login alert notification {string}", function (message: string) { 
    //handle the alert here
    expect(stub).to.be.calledWith(message);
});