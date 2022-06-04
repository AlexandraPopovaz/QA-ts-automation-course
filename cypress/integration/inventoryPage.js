const {it} = require('mocha');

describe('sorting tests', function () {
    //Logging into site
    this.beforeEach(function () {
        cy.login('standard_user', 'secret_sauce');
    });
    it('should sort all item names in ascending order', function () {
        cy.InventorySortItems('Name (A to Z)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.InventoryWrapItems();
        cy.InventoryCheckSorting('Name (A to Z)');
    });
    it('should sort all item names in descending order', function () {
        //Setting up page filter
        cy.InventorySortItems('Name (Z to A)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.InventoryWrapItems();
        cy.InventoryCheckSorting('Name (Z to A)');
    });
    it('should sort all prices in ascending order', function () {
        //Setting up page filter
        cy.InventorySortItems('Price (low to high)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.InventoryWrapItems();
        cy.InventoryCheckSorting('Price (low to high)');
    });
    it('should sort all prices in descending order', function () {
        //Setting up page filter
        cy.InventorySortItems('Price (high to low)');
        //Wrapping items into "pageItems" object, that can be accessed by cy.get('@pageItems');
        cy.InventoryWrapItems();
        cy.InventoryCheckSorting('Price (high to low)');
    });
    //Examples of InventoryPageObject functionality
    it('should test InventoryPage object functionality', function () {
        cy.InventoryAddToCart('Sauce Labs Backpack');
        cy.InventoryAddToCart('Sauce Labs Fleece Jacket');
        cy.InventoryPrintAmountOfItemsInCart();
        cy.InventoryRemoveFromCart('Sauce Labs Backpack');
        cy.InventoryGoToCart();
    });
});
