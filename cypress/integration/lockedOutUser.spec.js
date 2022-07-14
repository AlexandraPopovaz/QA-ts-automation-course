<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> main
>>>>>>> f273ccd085a41fd09e52b4bf9059377895d5f04c
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
<<<<<<< HEAD
=======
        // Clean form
>>>>>>> main
        cy.get('.error-button').click();
        cy.get('[data-test="username"]').clear();
        cy.get('[data-test="password"]').clear();
    });
<<<<<<< HEAD
})
=======
})
>>>>>>> main
