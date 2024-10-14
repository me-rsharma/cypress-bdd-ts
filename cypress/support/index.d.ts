///<reference types="cypress"/>

declare namespace Cypress {
    interface Chainable {
        openlinkinsametab(selector: string, expectedText: string): void;
    }
}

declare namespace Cypress {
    interface Chainable {
        userData: {
            "firstname": string,
            "lastname": string,
            "email": string,
            "body": string
        }
    }
}


// declare namespace Cypress {
//     interface Partial {
//     }
// }
