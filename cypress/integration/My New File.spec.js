describe('Consumers cart', function () {
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').click()
      .type('standard_user')
    cy.get('[data-test="password"]').click()
      .type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })
})

it('Add one item to the cart', () => {
  cy.get('#add-to-cart-sauce-labs-backpack').click()
  cy.get('#shopping_cart_container').click()
  cy.url('https://www.saucedemo.com/cart.html').should('include', 'Sauce Labs Backpack')

})

it('remove one item from the cart', () => {
  cy.get('#add-to-cart-sauce-labs-backpack').click()
  cy.get('#shopping_cart_container').click()
  cy.url('https://www.saucedemo.com/cart.html').should('include', 'Sauce Labs Backpack')
  cy.get('[data-test="remove-sauce-labs-backpack"]').click()
  cy.get('Sauce Labs Backpack').should('not.be.visible')

})             