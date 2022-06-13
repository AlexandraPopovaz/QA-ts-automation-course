export class LoginPage {
    static openPage() {
        cy.visit('https://www.saucedemo.com/');
    }

    static enterUsername(username) {
        cy.getBySel('username').type(username);
    }

    static enterPassword(password) {
        cy.getBySel('password').type(password);
    }

    static clickLoginButton() {
        cy.getBySel('login-button').click();
    }
}
