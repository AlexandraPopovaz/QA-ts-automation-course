var inventoryItem = require('../../models/inventoryItem.json');

export let pageItems = [];

export class InventoryPage {
    static getItems() {
        let amountOfItems = this.getAmountOfItems();
        console.log('amountOfItems', amountOfItems);
        for (let i = 1; i <= amountOfItems; i++) {
            inventoryItem = {name: '', price: '', description: '', addToCartLocator: ''};
            let itemJson = {...inventoryItem};
            cy.get(`.inventory_list > :nth-child(${i})> .inventory_item_description>.inventory_item_label > a >.inventory_item_name`)
                .invoke('text')
                .then((label) => {
                    cy.wrap(label).as('label');
                    itemJson['name'] = label;
                    let addToCartLocator = label;
                    addToCartLocator = addToCartLocator.toLowerCase();
                    let amountOfSpaceSymbols = addToCartLocator.split(' ').length - 1;
                    while (amountOfSpaceSymbols) {
                        addToCartLocator = addToCartLocator.replace(' ', '-');
                        amountOfSpaceSymbols -= 1;
                    }
                    itemJson['addToCartLocator'] = 'add-to-cart-' + addToCartLocator;
                });
            cy.get(`.inventory_list > :nth-child(${i})> .inventory_item_description > .pricebar > .inventory_item_price`)
                .invoke('text')
                .then((price) => {
                    cy.wrap(price).as('price');
                    itemJson['price'] = price;
                });
            cy.get(`.inventory_list > :nth-child(${i})> .inventory_item_description>.inventory_item_label > .inventory_item_desc`)
                .invoke('text')
                .then((description) => {
                    cy.wrap(description).as('description');
                    itemJson['description'] = description;
                });

            pageItems.push(itemJson);
        }
        console.log('pageItems', pageItems);
        cy.wrap(pageItems).as('pageItems');
        return cy.get('@pageItems');
    }
    static getAmountOfItems() {
        return Object.keys(cy.get('.inventory_list').children()).length + 1;
    }
    static printItems() {
        this.getItems().then((pageItems) => {
            cy.log(pageItems);
        });
    }
    static selectItem() {}
    static addItemToCart() {}
    static removeItemFromCart() {}
    static getAmountOfItemsinCart() {}
    static sortItems(order) {
        cy.getBySel('product_sort_container').select(order);
    }
    static openSideMenu() {}
    static selectOptionFromSideMenu() {}
    static selectSocialMedia() {}
}
