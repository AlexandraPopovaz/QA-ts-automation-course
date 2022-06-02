
class LockedOutUserPage{
    getLockedLogin(){
        return cy.get('[data-test="username"]');
    }
    getCorrectPassword(){
        return cy.get('[data-test="password"]');
    }
    getErrorText(){
        return cy.get('[data-test="error"]');
    }
    getClickErrorButton(){
        return cy.get('.error-button');
    }
    getClearUserName(){
        return cy.get('[data-test="username"]');
    }
    getClearPasswordName(){
        return cy.get('[data-test="password"]');
    }
}

export default LockedOutUserPage