import LoginPage from './pageObjects/loginPage';


Cypress.Commands.add("login", (loginPage, username, password) => {
 
    loginPage.username().type(username);
    loginPage.password().type(password);
    loginPage.loginButton().click();


});
