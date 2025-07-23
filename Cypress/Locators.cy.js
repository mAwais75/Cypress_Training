describe('Types of Locators - By ID, Class, Attributes, Attribute value and with Combination of these', () => {
  
    it('By Cypress Test ID *MOST RECOMMENDED*', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.get('[data-cy="imputEmail1"]').click();
    cy.get('input#inputEmail1.input-full-width.size-medium.shape-rectangle').click();
  });

});
