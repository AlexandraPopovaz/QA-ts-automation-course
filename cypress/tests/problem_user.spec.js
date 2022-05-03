
describe('Problem user', function (){
    before(function (){
        const correctLogin = ['problem_user'];
        const correctPassword = ['secret_sauce'];
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type(`${correctLogin}`);
        cy.get('[data-test="password"]').type(`${correctPassword}`);
        cy.get('[data-test="login-button"]').click();
    });

    it('Should check ', function () {
        // cy.get('[data-test="error"]').should("be.visible")
        // cy.get('.error-button').click();
        // cy.get('[data-test="username"]').clear();
        // cy.get('[data-test="password"]').clear();
    });
})