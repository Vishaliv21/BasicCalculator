class BasicCalculatorPage {

    visit() {
        cy.visit('/BasicCalculator');
    }

    enterNumber1(value) {
        cy.get('#number1Field').type(value);
    }

    enterNumber2(value) {
        cy.get('#number2Field').type(value);
    }

    selectOperation(operation) {
        cy.get('#selectOperationDropdown').select(operation);
    }

    clickCalculateButton() {
        cy.get('#calculateButton').click();
    }

    getResult() {
        return cy.get('#numberAnswerField');
    }

}

export default BasicCalculatorPage;
