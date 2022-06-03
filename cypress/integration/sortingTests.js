const {it} = require('mocha');

describe('sorting tests', function () {
    //Logging into site
    this.beforeEach(function () {
        cy.login('standard_user', 'secret_sauce');
    });
    it('should sort all item names in ascending order', function () {
        cy.sortItems('Name (A to Z)');
        cy.getItems();
        cy.checkSorting('Name (A to Z)');
    });
    it('should sort all item names in descending order', function () {
        //Setting up page filter
        cy.sortItems('Name (Z to A)');
        //Getting items to compare
        cy.getItems();
        cy.checkSorting('Name (Z to A)');
    });
    it('should sort all prices in ascending order', function () {
        let pageItems = [];
        //Setting up page filter
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)');
        //Getting items to compare
        let amountOfItems = Object.keys(cy.get('.inventory_list').children()).length + 1;
        for (let i = 1; i <= amountOfItems; i++) {
            cy.get(`.inventory_list > :nth-child(${i})> .inventory_item_description > .pricebar > .inventory_item_price`)
                .invoke('text')
                .then((currentItem) => {
                    cy.wrap(currentItem).as('currentItem');
                });
            cy.get('@currentItem').then((currentItem) => {
                // Removing '$' sign and adding price to results array
                pageItems.push(currentItem.slice(1));
            });
        }
        cy.wrap(pageItems).as('pageItems');
        cy.get('@pageItems').then((pageItems) => {
            //Copying array to perform sorting
            const arrayToCompare = pageItems.slice();
            //Sorting in ascending alpabetical order
            arrayToCompare.sort(function (a, b) {
                return a - b;
            });
            //Comparing results
            for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                expect(pageItems[i]).to.be.equal(arrayToCompare[i]);
            }
        });
    });
    it('should sort all prices in descending order', function () {
        let pageItems = [];
        //Setting up page filter
        cy.get('[data-test="product_sort_container"]').select('Price (high to low)');
        //Getting items to compare
        let amountOfItems = Object.keys(cy.get('.inventory_list').children()).length + 1;
        for (let i = 1; i <= amountOfItems; i++) {
            cy.get(`.inventory_list > :nth-child(${i})> .inventory_item_description > .pricebar > .inventory_item_price`)
                .invoke('text')
                .then((currentItem) => {
                    cy.wrap(currentItem).as('currentItem');
                });
            cy.get('@currentItem').then((currentItem) => {
                // Removing '$' sign and adding price to results array
                pageItems.push(currentItem.slice(1));
            });
        }
        cy.wrap(pageItems).as('pageItems');
        cy.get('@pageItems').then((pageItems) => {
            //Copying array to perform sorting
            const arrayToCompare = pageItems.slice();
            //Sorting in descending alpabetical order
            arrayToCompare.sort(function (a, b) {
                return b - a;
            });
            //Comparing results
            for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                expect(pageItems[i]).to.be.equal(arrayToCompare[i]);
            }
        });
    });
});
