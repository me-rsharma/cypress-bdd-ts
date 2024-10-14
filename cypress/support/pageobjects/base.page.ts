///<reference types="cypress"/>


// interface userData {
//     "firstname": string,
//     "lastname": string,
//     "email": string,
//     "body": string
// }

class BasePage {
    baseUrl = Cypress.env("baseUrl");

    navigate(path: string) {
        cy.fixture('contactus.json').then((data)=>{
            cy.log(`Test cases executed by user: ${data.firstname} ${data.lastname}`);
        })
        cy.visit(this.baseUrl + path);
    }

    getPageTitle(){
        return cy.title();
    }
}

export default BasePage;