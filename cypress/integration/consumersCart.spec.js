describe('consumersCart', function () {

it('Add one item to the cart', () => {

  cy.visit('/')
    cy.get('[data-test="username"]').click()
      .type('standard_user')
    cy.get('[data-test="password"]').click()
      .type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
  cy.get('#add-to-cart-sauce-labs-backpack').click()
  cy.get('#shopping_cart_container').click()
  cy.get('#item_4_title_link').should('include.text', 'Sauce Labs Backpack')
})  

})      