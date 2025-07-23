describe('Types of Locators - By ID, Class, Attributes, Attribute value and with Combination of these', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
  });

  it('By ID', () => {
    cy.get('#inputEmail1').click();
  });

  it('By Class', () => {
    cy.get('.input-full-width.size-medium.shape-rectangle').click();
  });

  it('By Tag', () => {
    cy.get('[input]').click();
  });

  it('By Attribute and relevant Values', () => {
    cy.get('[placeholder="Email"]').click();
  });

  it('By Combination', () => {
    cy.get('input#inputEmail1.input-full-width.size-medium.shape-rectangle').click();
  });

  it('By Cypress Test ID *MOST RECOMMENDED*', () => {
    cy.get('[data-cy="inputEmail1"]').click();
  });

});
