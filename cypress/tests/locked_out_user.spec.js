// locked_out_user.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Locked Out User', function (){
    // beforeEach(function (){
    //     cy.visit('https://www.saucedemo.com/');
    // });
    it('should have title', function () {
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('equal', 'Sauce Labs');

    });
    // it ('Should catch error message', function(){
    //     cy.get('[data-test="username"]').click();
    //     cy.get('[data-test="username"]').type('locked_out_user');
    //     cy.get('[data-test="password"]').click();
    //     cy.get('[data-test="password"]').type('secret_sauce');
    //     cy.get('[data-test="login-button"]').click();
    //     cy.get('[data-test="error"]').click();
    // })
})
