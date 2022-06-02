
class CheckoutStepTwoPage{
    getAddToCard(){
        return cy.get('#add-to-cart-sauce-labs-bike-light');
    }
    getShoppingCardButton(){
        return cy.get('.shopping_cart_link');
    }
    getCheckoutButton(){
        return cy.get('#checkout');
    }
    getFirstName(){
        return cy.get('#first-name');
    }
    getLastName(){
        return cy.get('#last-name');
    }
    getPostalCode(){
        return cy.get('#postal-code');
    }
    getContinueButton(){
        return cy.get('#continue');
    }
    getFinishButton(){
        return cy.get('#finish');
    }
    getBackHomeText (){
        return cy.get('#back-to-products');
    }
}

export default CheckoutStepTwoPage