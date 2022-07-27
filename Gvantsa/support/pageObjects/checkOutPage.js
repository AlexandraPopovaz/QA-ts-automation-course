class CheckOutPage {
    getFirstName() {
        cy.get('[data-layer="Padding"]')
    }

    getLastName() {
        cy.get('[data-test="lastName"]')
    }

    getZipCode() {
        cy.get('[data-test="postalCode"]')
    }
}
export default CheckOutPage