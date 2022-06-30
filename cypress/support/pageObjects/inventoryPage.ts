import {Item} from '../../models/pageItems';
import {inventorySelectorPrefix} from '../../models/mapping/inventory';

export class InventoryItem implements Item {
    title: string;
    price: string;
    description: string;
    addToCartLocator: string;

    prepareItem(itemCounter: number) {
        ['name', 'price', 'description'].forEach((itemProperty) => {
            cy.get(Inventory.getItemLocator(itemProperty, itemCounter))
                .invoke('text')
                .then((propertyValue) => {
                    switch (itemProperty) {
                        case 'price':
                            this.price = propertyValue.slice(1);
                            break;
                        case 'description':
                            this.description = propertyValue;
                            break;
                        case 'name':
                            this.title = propertyValue;
                            const addToCartLocator = propertyValue;
                            let locatorLowerCase = addToCartLocator.toLowerCase();
                            let numberOfSpaceSymbols = addToCartLocator.split(' ').length - 1;
                            while (numberOfSpaceSymbols) {
                                locatorLowerCase = locatorLowerCase.replace(' ', '-');
                                numberOfSpaceSymbols -= 1;
                            }
                            this.addToCartLocator = 'add-to-cart-' + locatorLowerCase;
                    }
                });
        });
        return this;
    }
}

export class Inventory {
    static getItemLocator(name: string, itemCounter: number) {
        switch (name) {
            case 'name':
                return `.inventory_list > :nth-child(${itemCounter})> .inventory_item_description>.inventory_item_label > a >.inventory_item_name`;
            case 'price':
                return `.inventory_list > :nth-child(${itemCounter})> .inventory_item_description > .pricebar > .inventory_item_price`;
            case 'description':
                return `.inventory_list > :nth-child(${itemCounter})> .inventory_item_description>.inventory_item_label > .inventory_item_desc`;
            default:
                throw 'locator with specified name is not found';
        }
    }

    static getnumberOfItems() {
        return Object.keys(cy.get('.inventory_list').children()).length + 1;
    }

    static prepareItems() {
        let pageItems = [];
        for (let itemCounter = 1; itemCounter <= this.getnumberOfItems(); itemCounter++) {
            let Item = new InventoryItem().prepareItem(itemCounter);
            pageItems.push(Item);
        }
        cy.wrap(pageItems).as('pageItems');
        return cy.get('@pageItems');
    }

    static printItems() {
        cy.get('@pageItems').then((pageItems) => {
            console.log(pageItems);
        });
    }

    static AddToCart(selector: string) {
        selector = selector.toLowerCase();
        let numberOfSpaceSymbols = selector.split(' ').length - 1;
        while (numberOfSpaceSymbols) {
            selector = selector.replace(' ', '-');
            numberOfSpaceSymbols -= 1;
        }
        selector = inventorySelectorPrefix.get('Add to cart') + selector;
        return cy.getBySel(selector).click();
    }

    static removeFromCart(selector: string) {
        selector = selector.toLowerCase();
        let numberOfSpaceSymbols = selector.split(' ').length - 1;
        while (numberOfSpaceSymbols) {
            selector = selector.replace(' ', '-');
            numberOfSpaceSymbols -= 1;
        }
        selector = inventorySelectorPrefix.get('Remove') + selector;
        return cy.getBySel(selector).click();
    }
    static printnumberOfItemsInCart() {
        cy.get('#shopping_cart_container > a > span')
            .invoke('text')
            .then((text) => {
                cy.log('number of items in cart: ', text);
            });
    }
    static sortItems(order: string) {
        cy.getBySel('product_sort_container').select(order);
    }
    static goToCart() {
        cy.get('#shopping_cart_container > a').click();
    }
}
