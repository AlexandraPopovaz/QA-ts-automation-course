
describe('Problem user', function (){
    before(function (){
        const correctLogin = ['problem_user'];
        const correctPassword = ['secret_sauce'];
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type(`${correctLogin}`);
        cy.get('[data-test="password"]').type(`${correctPassword}`);
        cy.get('[data-test="login-button"]').click();
    });

    it('Should check correct tile view', function () {
        cy.get('#item_4_img_link').should("to.be.visible");
        cy.get('#item_4_title_link > .inventory_item_name').contains("Sauce Labs Backpack");
        cy.get('#item_4_img_link').click();
        cy.get('.inventory_details_img').should("to.be.visible");
        cy.get('.inventory_details_name').contains("Sauce Labs Fleece Jacket");
    });
})