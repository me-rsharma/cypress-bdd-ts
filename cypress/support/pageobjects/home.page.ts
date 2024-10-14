///<reference types="cypress"/>

import BasePage from "./base.page";

interface HomePageInterface {
    loginLinkSelector: string;
    contactusLinkSelector: string;

    navigateToHomePage(path: string): void;
    openLoginLinkInSameTab(): void;
    openContactUsLinkInSameTab(): void;

}

export default class HomePage extends BasePage implements HomePageInterface {

    get loginLinkSelector(): string {
        return "#login-portal";
    }

    get contactusLinkSelector(): string{
        return '#contact-us';
    }

   navigateToHomePage(path: string){
    super.navigate(path);
   }

   openLoginLinkInSameTab(){
    cy.openlinkinsametab(this.loginLinkSelector, "LOGIN PORTAL");
   }

   openContactUsLinkInSameTab(){
    cy.openlinkinsametab(this.contactusLinkSelector, "CONTACT US");
   }
}