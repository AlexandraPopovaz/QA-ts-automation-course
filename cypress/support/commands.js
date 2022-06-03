// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
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

Cypress.Commands.add('sortItems', (order) => {
    InventoryPage.sortItems(order);
});

Cypress.Commands.add('getItems', () => {
    InventoryPage.getItems();
});

Cypress.Commands.add('printItems', () => {
    InventoryPage.printItems();
});

Cypress.Commands.add('checkSorting', (order) => {
    const items = [];
    const arrayToCompare = [];
    switch (order) {
        case 'Name (A to Z)':
            console.log('jdsffdsfsdf');
            cy.get('@pageItems').then((pageItems) => {
                pageItems.forEach((item) => {
                    items.push(item.name);
                    arrayToCompare.push(item.name);
                });
                console.log('items', items);
                //Sorting in ascending alpabetical order
                arrayToCompare.sort();
                //Comparing results
                for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                    expect(items[i]).to.be.equal(arrayToCompare[i]);
                }
            });
            break;
        case 'Name (Z to A)':
            console.log('jdsffdsfsdf');
            cy.get('@pageItems').then((pageItems) => {
                pageItems.forEach((item) => {
                    items.push(item.name);
                    arrayToCompare.push(item.name);
                });
                console.log('items', items);
                //Sorting in ascending alpabetical order
                arrayToCompare.sort().reverse();
                //Comparing results
                for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                    expect(items[i]).to.be.equal(arrayToCompare[i]);
                }
            });
            break;
    }
});
