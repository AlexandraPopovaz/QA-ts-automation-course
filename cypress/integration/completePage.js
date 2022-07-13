import LoginPage from '../support/pageObjects/LoginPage';
import CheckoutCompletePage from '../support/pageObjects/CheckoutCompletePage';

const loginPage = new LoginPage();
const checkoutCompletePage = new CheckoutCompletePage();

describe('completePage', function () {
    it('should be possible to buy a product', () => {
        loginPage.openPage()
        loginPage.signIn('standard_user', 'secret_sauce')

        checkoutCompletePage.addToCartButton().click()
        checkoutCompletePage.shoppingCartButton().click()
        checkoutCompletePage.buyProduct('Alex', 'Popova', '12345')

        checkoutCompletePage.finishButton().click()
        checkoutCompletePage.checkoutCompleteContainer().should('contain', 'THANK YOU FOR YOUR ORDER')
    })

})