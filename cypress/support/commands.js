import {LoginPage} from './pageObjects/loginPage';
import {Inventory} from './pageObjects/inventoryPage';

Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('login', (username, password) => {
    LoginPage.openPage();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLoginButton();
});

Cypress.Commands.add('inventorySortItems', (order) => {
    Inventory.sortItems(order);
});

Cypress.Commands.add('inventoryPrepareItems', (order) => {
    Inventory.prepareItems(order);
});

Cypress.Commands.add('inventoryAddToCart', (selector) => {
    Inventory.AddToCart(selector);
});

Cypress.Commands.add('inventoryRemoveFromCart', (selector) => {
    Inventory.removeFromCart(selector);
});

Cypress.Commands.add('inventoryGoToCart', () => {
    Inventory.goToCart();
});

Cypress.Commands.add('inventoryPrintnumberOfItemsInCart', () => {
    Inventory.printnumberOfItemsInCart();
});

Cypress.Commands.add('inventoryPrintItems', () => {
    Inventory.printItems();
});

Cypress.Commands.add('inventoryCheckSorting', (order, property) => {
    const items = [];
    const arrayToCompare = [];
    cy.get('@pageItems').then((pageItems) => {
        pageItems.forEach((item) => {
            //Filling-in the arrays
            items.push(item[property]);
            arrayToCompare.push(item[property]);
            //Sorting
            switch (order) {
                case 'Name (A to Z)':
                    arrayToCompare.sort();
                    break;

                case 'Name (Z to A)':
                    arrayToCompare.sort().reverse();
                    break;

                case 'Price (low to high)':
                    arrayToCompare.sort(function (a, b) {
                        return a - b;
                    });
                    break;

                case 'Price (high to low)':
                    arrayToCompare.sort(function (a, b) {
                        return b - a;
                    });
                    break;
                default:
                    cy.log(order, 'Price (high to low)');
                    throw 'Sorting order appears to be incorrect';
            }
            //Comparing results
            for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                expect(items[i]).to.be.equal(arrayToCompare[i]);
            }
        });
    });
});
