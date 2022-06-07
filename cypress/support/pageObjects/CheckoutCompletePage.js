class CheckoutCompletePage{
    getAddToCard(){
        return cy.get('#add-to-cart-sauce-labs-backpack');
    }
    getShoppingCardButton(){
        return cy.get('#shopping_cart_container');
    };

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
    getBackHomeButton (){
        return cy.get('#back-to-products');
    }
    getShoppingCardButton(){
        return cy.get('#shopping_cart_container');
    };
    
}

export default CheckoutCompletePage 