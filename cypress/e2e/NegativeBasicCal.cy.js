/// <reference types="Cypress" />

describe('Basic - normal approach', () => {

    beforeEach(() => {

        cy.visit('/BasicCalculator')

    })

    it('Add negative - normal approach', () => {

        cy.get('#selectBuild').select('2')
        cy.wait(5000)
        cy.get('#number1Field').type('2')
        cy.get('#number2Field').type('3')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('not.have.value', '5')
        cy.get('#clearButton').click()

    })
})