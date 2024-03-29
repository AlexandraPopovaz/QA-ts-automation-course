import LoginPage from '../support/pageObjects/LoginPage';

describe('consumersCart', function () {
  let userName='standard_user' 
  let password='secret_sauce'
it('Add one item to the cart', () => {
  const loginPage = new LoginPage();
  
  loginPage.openPage()
  loginPage.userName().type(userName);
  loginPage.password().type(password);

  loginPage.loginButton().click();

  cy.get('#add-to-cart-sauce-labs-backpack').click()
  cy.get('#shopping_cart_container').click()
  cy.get('#item_4_title_link').should('include.text', 'Sauce Labs Backpack')
})  

})      