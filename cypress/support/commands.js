import {LoginPage} from './pageObjects/loginPage';
import {InventoryPage} from './pageObjects/inventoryPage';

Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('login', (username, password) => {
    LoginPage.openPage();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLoginButton();
});

Cypress.Commands.add('InventorySortItems', (order) => {
    InventoryPage.sortItems(order);
});

Cypress.Commands.add('InventoryWrapItems', (order) => {
    InventoryPage.wrapItems(order);
});

Cypress.Commands.add('InventoryAddToCart', (selector) => {
    InventoryPage.AddToCart(selector);
});

Cypress.Commands.add('InventoryRemoveFromCart', (selector) => {
    InventoryPage.removeFromCart(selector);
});

Cypress.Commands.add('InventoryGoToCart', () => {
    InventoryPage.goToCart();
});

Cypress.Commands.add('InventoryPrintAmountOfItemsInCart', () => {
    InventoryPage.printAmountOfItemsInCart();
});

Cypress.Commands.add('InventoryPrintItems', () => {
    InventoryPage.printItems();
});

Cypress.Commands.add('InventoryCheckSorting', (order) => {
    const items = [];
    const arrayToCompare = [];
    switch (order) {
        case 'Name (A to Z)':
            cy.get('@pageItems').then((pageItems) => {
                pageItems.forEach((item) => {
                    items.push(item.name);
                    arrayToCompare.push(item.name);
                });
                //Sorting in ascending alpabetical order
                arrayToCompare.sort();
                //Comparing results
                for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                    expect(items[i]).to.be.equal(arrayToCompare[i]);
                }
            });
            break;
        case 'Name (Z to A)':
            cy.get('@pageItems').then((pageItems) => {
                pageItems.forEach((item) => {
                    items.push(item.name);
                    arrayToCompare.push(item.name);
                });
                //Sorting in ascending alpabetical order
                arrayToCompare.sort().reverse();
                //Comparing results
                for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                    expect(items[i]).to.be.equal(arrayToCompare[i]);
                }
            });
            break;
        case 'Price (low to high)':
            cy.get('@pageItems').then((pageItems) => {
                pageItems.forEach((item) => {
                    items.push(item.price);
                    arrayToCompare.push(item.price);
                });
                //Sorting in ascending alpabetical order
                arrayToCompare.sort().sort(function (a, b) {
                    return a - b;
                });
                //Comparing results
                for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                    expect(items[i]).to.be.equal(arrayToCompare[i]);
                }
            });
            break;
        case 'Price (high to low)':
            cy.get('@pageItems').then((pageItems) => {
                pageItems.forEach((item) => {
                    items.push(item.price);
                    arrayToCompare.push(item.price);
                });
                //Sorting in ascending alpabetical order
                arrayToCompare.sort().sort(function (a, b) {
                    return b - a;
                });
                //Comparing results
                for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                    expect(items[i]).to.be.equal(arrayToCompare[i]);
                }
            });
            break;
    }
});
