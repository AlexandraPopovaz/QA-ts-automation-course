import CheckoutCompletePage from '../support/pageObjects/CheckoutCompletePage';

const CheckoutCompletePage = new CheckoutCompletePage();

function login() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
}

describe('completePage', function() {
    it('checkCompletePage', function() {
        login()
    })

    CheckoutCompletePage.getAddToCard().click()
    CheckoutCompletePage.getShoppingCardButton().click()
    CheckoutCompletePage.getCheckoutButton().click()
    CheckoutCompletePage.getFirstName().type('Alex')
    CheckoutCompletePage.getLastName().type('Alex')
    CheckoutCompletePage.getPostalCode().type('12345s')
    CheckoutCompletePage.getContinueButton().click()
    CheckoutCompletePage.getFinishButton().click()
    CheckoutCompletePage.getBackHomeButton().click()

cy.get('#shopping_cart_container').click()
CheckoutCompletePage.getShoppingCardButton().should('not.contain', 'item_4_title_link')


})