class CheckoutCompletePage {
    constructor() {
    }
    addToCartButton() {
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }
    shoppingCartButton() {
        return cy.get('#shopping_cart_container');
    };

    checkoutButton() {
        return cy.get('#checkout');
    }
    firstName() {
        return cy.get('#first-name');
    }
    lastName() {
        return cy.get('#last-name');
    }
    postalCode() {
        return cy.get('#postal-code');
    }
    continueButton() {
        return cy.get('#continue');
    }
    finishButton() {
        return cy.get('#finish');
    }

    buyProduct(firstName, lastName, postalCode) {

        this.checkoutButton().click()
        this.firstName().type(firstName)
        this.lastName().type(lastName)
        this.postalCode().type(postalCode)
        this.continueButton().click()
    }
    checkoutCompleteContainer() {
        return cy.get('#checkout_complete_container');
    }
}

export default CheckoutCompletePage 