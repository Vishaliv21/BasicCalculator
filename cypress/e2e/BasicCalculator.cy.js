/// <reference types="Cypress" />

import BasicCalculatorPage from '../Page-objects/cal';


describe('Basic - normal approach', () => {

    const basicCalculatorPage = new BasicCalculatorPage();

    it('Add passes - normal approach', () => {

        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('#number1Field').type('1')
        cy.get('#number2Field').type('2')
        cy.get('#calculateButton').click()
        cy.get('#numberAnswerField').should('have.value', '3')

    })

    it('Subtract passes - using POM', () => {

        basicCalculatorPage
            .visit()

        basicCalculatorPage
            .enterNumber1('1')

        basicCalculatorPage
            .enterNumber2('2')

        basicCalculatorPage
            .selectOperation('Subtract')

        basicCalculatorPage
            .clickCalculateButton()

        basicCalculatorPage
            .getResult()
            .should('have.value', '-1')

    })

    it('Multiply passes - using fixture', () => {

        cy.visit('/BasicCalculator');

        cy.fixture('basicCal').then((data) => {
            cy.get('#number1Field').type(data.number1);
            cy.get('#number2Field').type(data.number2);
        });

        cy.get('#selectOperationDropdown').select('Multiply');
        cy.get('#calculateButton').click();
        cy.get('#numberAnswerField').should('have.value', '2');

        cy.wait(3000);

    })

    it('Concatenate passes - using custom commands', () => {

        cy.BasicCal(1, 2, 'Concatenate')
        cy.get('#numberAnswerField').should('have.value', '12')

    })

});