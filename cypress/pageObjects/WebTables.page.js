import BasePage from "./basePage";


class WebTables extends BasePage {
    static get url() {
        return "/webtables";
      }
    static get add() {
        return cy.get(`[id="addNewRecordButton"]`);
    }
    static get firstName() {
        return cy.get(`[id="firstName"]`);
    }
    static get lastName() {
        return cy.get(`[id="lastName"]`);
    }
    static get email() {
        return cy.get(`[id="userEmail"]`);
    }
    static get age() {
        return cy.get(`[id="age"]`);
    }
    static get salary() {
        return cy.get(`[id="salary"]`);
    }
    static get department() {
        return cy.get(`[id="department"]`);
    }
    static get submit() {
        return cy.get(`[id="submit"]`);
    }
    static get search() {
        return cy.get(`[id="searchBox"]`);
    }
    static get table() {
        return cy.get(`[class="rt-table"]`);
    }
    static get deleteButton() {
        return cy.get(`[id="delete-record-4"]`);
    }
    static get noData() {
        return cy.get(`[class="rt-noData"]`);
    }
}

export default WebTables;