const {it} = require('mocha');

let MyItems = new Array();
let amountOfItems = 9;

Cypress.Commands.add('getItems', async () => {
    return await getItems();
});

describe('sorting tests', function () {
    before(function () {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });
    it('should sort all items in ascending order', function () {
        MyItems = [];
        //Getting items to compare
        cy.get('[data-test="product_sort_container"]').select('Name (A to Z)');
        amountOfItems = Object.keys(cy.get('.inventory_list').children()).length + 1;
        for (let i = 1; i <= amountOfItems; i++) {
            cy.get(`.inventory_list > :nth-child(${i})> .inventory_item_description>.inventory_item_label > a >.inventory_item_name`)
                .invoke('text')
                .then((result) => {
                    let tempData = result;
                    cy.wrap(tempData).as('tempData');
                });
            cy.get('@tempData').then((tempData) => {
                MyItems.push(tempData);
            });
        }
        cy.wrap(MyItems).as('MyItems');
        cy.get('@MyItems').then((MyItems) => {
            //Copying array to perform sorting
            const arrayToCompare = MyItems.slice();
            //Sorting in ascending alpabetical order
            arrayToCompare.sort();
            //Comparing results
            for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                expect(MyItems[i]).to.be.equal(arrayToCompare[i]);
            }
        });
    });
    it('should sort all items in descending order', function () {
        MyItems = [];
        //Getting items to compare
        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)');
        amountOfItems = Object.keys(cy.get('.inventory_list').children()).length + 1;
        for (let i = 1; i <= amountOfItems; i++) {
            cy.get(`.inventory_list > :nth-child(${i})> .inventory_item_description>.inventory_item_label > a >.inventory_item_name`)
                .invoke('text')
                .then((result) => {
                    let tempData = result;
                    cy.wrap(tempData).as('tempData');
                });
            cy.get('@tempData').then((tempData) => {
                MyItems.push(tempData);
            });
        }
        cy.wrap(MyItems).as('MyItems');
        cy.get('@MyItems').then((MyItems) => {
            //Copying array to perform sorting
            const arrayToCompare = MyItems.slice();
            //Sorting in descending alpabetical order
            arrayToCompare.sort().reverse();
            //Comparing results
            for (let i = 0; i < Object.keys(arrayToCompare).length; i++) {
                expect(MyItems[i]).to.be.equal(arrayToCompare[i]);
            }
        });
    });
});
