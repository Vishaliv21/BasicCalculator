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

Cypress.Commands.add('BasicCal', (num1, num2, operation) => {

    cy.visit('https://testsheepnz.github.io/BasicCalculator')

        cy.get('#number1Field').type(num1)
        cy.get('#number2Field').type(num2)
        cy.get('#selectOperationDropdown').select(operation)
        cy.get('#calculateButton').click()
        cy.wait(3000)

})