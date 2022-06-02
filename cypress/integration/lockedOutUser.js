import LockedOutUserPage from './../support/PageObjects/LockedOutUserPage'

    // Creating Object for LockedOutUserPage
    const lockedOutPage = new LockedOutUserPage();

    describe('Locked Out User', function () {
        before(function () {
            const lockedLogin = ['locked_out_user'];
            const correctPassword = ['secret_sauce'];
            cy.visit('https://www.saucedemo.com/');
            lockedOutPage.getLockedLogin().type(`${lockedLogin}`);
            lockedOutPage.getCorrectPassword().type(`${correctPassword}`);
            cy.get('[data-test="login-button"]').click();
        });

        it('Should check cant login locked user', function () {
            lockedOutPage.getErrorText().should("be.visible")
            // Clean form
            lockedOutPage.getClickErrorButton().click();
            lockedOutPage.getClearUserName().clear();
            lockedOutPage.getClearPasswordName().clear();
        });
    })

