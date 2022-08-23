import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullName() {
    return cy.get(`[id="userName"]`);
  }
  static get email() {
    return cy.get(`[id="userEmail"]`);
  }
  static get currentAddress() {
    return cy.get(`[id="currentAddress"]`);
  }
  static get permamentAddress() {
    return cy.get(`[id="permanentAddress"]`)
  }
  static get Submit() {
    return cy.get(`[id="submit"]`)
  }

  static get pfullName() {
    return cy.get(`p[id="name"]`);
  }
  static get pemail() {
    return cy.get(`p[id="email"]`);
  }
  static get pcurrentAddress() {
    return cy.get(`p[id="currentAddress"]`)
  }
  static get ppermamentAddress() {
    return cy.get(`p[id="permanentAddress"]`)
  }
}

 

export default TextBoxPage;
