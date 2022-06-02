
class LockedOutUserPage{
    /*
     login credentials should be removed and moved
      to authorization Page Object
     */
    getLockedLogin(){
        return cy.get('[data-test="username"]');
    }
    getCorrectPassword(){
        return cy.get('[data-test="password"]');
    }
    getLoginButton(){
        return cy.get('[data-test="login-button"]');
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