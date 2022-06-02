
class ProblemUserPage{
    /*
     login credentials should be removed and moved
      to authorization Page Object
     */
    getCorrectLogin(){
        return cy.get('[data-test="username"]');
    }
    getImageTitle(){
        return cy.get('#item_4_img_link');
    }
    getTitleText(){
        return cy.get('#item_4_title_link > .inventory_item_name');
    }
    getInventoryImage(){
        return cy.get('.inventory_details_img');
    }
    getInventoryDetailsName(){
        return cy.get('.inventory_details_name');
    }


}

export default ProblemUserPage