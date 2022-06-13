const {it} = require('mocha');
const {Inventory} = require('../support/pageObjects/inventoryPage');

describe('sorting tests', function () {
    //Logging into site
    this.beforeEach(function () {
        cy.login('standard_user', 'secret_sauce');
    });
    it('should sort all item names in ascending order', function () {
        cy.inventorySortItems('Name (A to Z)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.inventoryPrepareItems();
        cy.inventoryCheckSorting('Name (A to Z)', 'title');
    });
    it('should sort all item names in descending order', function () {
        //Setting up page filter
        cy.inventorySortItems('Name (Z to A)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.inventoryPrepareItems();
        cy.inventoryCheckSorting('Name (Z to A)');
    });
    it('should sort all prices in ascending order', function () {
        //Setting up page filter
        cy.inventorySortItems('Price (low to high)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.inventoryPrepareItems();
        cy.inventoryCheckSorting('Price (low to high)');
    });
    it('should sort all prices in descending order', function () {
        //Setting up page filter
        cy.inventorySortItems('Price (high to low)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.inventoryPrepareItems();
        cy.inventoryCheckSorting('Price (high to low)');
    });
    //Examples of InventoryPageObject functionality
    it('should test InventoryPage object functionality', function () {
        cy.inventoryAddToCart('Sauce Labs Backpack');
        cy.inventoryAddToCart('Sauce Labs Fleece Jacket');
        cy.inventoryPrintnumberOfItemsInCart();
        cy.inventoryRemoveFromCart('Sauce Labs Backpack');
        cy.inventoryGoToCart();
    });
});
