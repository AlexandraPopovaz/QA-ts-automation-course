// checkoutUser.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import CheckoutStepTwoPage from './../support/PageObjects/CheckoutStepTwoPage';

// Creating Object for LockedOutUserPage
const checkoutStepTwoPage = new CheckoutStepTwoPage();


function login() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
}

describe('My first test', function() {
    it('visits to the website', function() {
        login()
    })

    it('adds item to the cart', function() {
        login()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()

    })

    it('checks items in the cart', function() {
        login()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_link').click().then((el) => {
            const text = el.text();
            expect(text).to.eq("1")

        })
    })

    it('checks checkout function', function() {
        login()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
    })

    it('will fill in fields', function() {
        login()
        checkoutStepTwoPage.getAddToCard().click()
        checkoutStepTwoPage.getShoppingCardButton().click()
        checkoutStepTwoPage.getCheckoutButton().click()
        checkoutStepTwoPage.getFirstName().type('Gvantsa')
        checkoutStepTwoPage.getLastName().type('Shak')
        checkoutStepTwoPage.getPostalCode().type('1400')
        checkoutStepTwoPage.getContinueButton().click()
        checkoutStepTwoPage.getFinishButton().click()
    })

    it('Checks text of the button', function() {
        checkoutStepTwoPage.getBackHomeText().should('have.text', 'Back Home')
    })
})