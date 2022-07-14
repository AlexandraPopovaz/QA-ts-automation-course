<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f273ccd085a41fd09e52b4bf9059377895d5f04c
import LoginPage from './pageObjects/loginPage';


Cypress.Commands.add("login", (loginPage, username, password) => {
 
    loginPage.username().type(username);
    loginPage.password().type(password);
    loginPage.loginButton().click();


});
<<<<<<< HEAD
=======
=======
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
>>>>>>> main
>>>>>>> f273ccd085a41fd09e52b4bf9059377895d5f04c
