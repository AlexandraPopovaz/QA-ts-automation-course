import LockedOutUserPage from './../support/PageObjects/LockedOutUserPage';
import ProblemUserPage from './../support/PageObjects/ProblemUserPage';

// Creating Object for LockedOutUserPage
const lockedOutPage = new LockedOutUserPage();
const problemUserPage = new ProblemUserPage();

describe('Problem user', function (){
    before(function (){
        const correctLogin = ['problem_user'];
        const correctPassword = ['secret_sauce'];
        cy.visit('https://www.saucedemo.com/');
        problemUserPage.getCorrectLogin().type(`${correctLogin}`);
        lockedOutPage.getCorrectPassword().type(`${correctPassword}`);
        lockedOutPage.getLoginButton().click();
    });

    it('Should check correct tile view', function () {
        const title = {
            inventoryTitleName: "",
            inventoryDetailsName : "Sauce Labs Fleece Jacket"
        }
        // cy.get('#item_4_img_link').should("to.be.visible");
        problemUserPage.getImageTitle().should("to.be.visible");
        // cy.get('#item_4_title_link > .inventory_item_name')
        problemUserPage.getTitleText()
            .should("be.visible")
            .and("contain.text", title.inventoryTitleName)
        problemUserPage.getImageTitle().click();
        problemUserPage.getInventoryImage().should("to.be.visible")
        problemUserPage.getInventoryDetailsName()
            .should("be.visible")
            .and("contain.text", title.inventoryDetailsName)

        if (title.inventoryTitleName !== title.inventoryDetailsName) {
            // throw onerror
            return false
        }
    })
})