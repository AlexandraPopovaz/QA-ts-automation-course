describe('Locked Out User', function (){
    before(function (){
        const lockedLogin = ['locked_out_user'];
        const correctPassword = ['secret_sauce'];
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type(`${lockedLogin}`);
        cy.get('[data-test="password"]').type(`${correctPassword}`);
        cy.get('[data-test="login-button"]').click();
    });

    it('Should check cant login locked user', function () {
        cy.get('[data-test="error"]').should("be.visible")
        // Clean form
        cy.get('.error-button').click();
        cy.get('[data-test="username"]').clear();
        cy.get('[data-test="password"]').clear();
    });
})
