describe('Different Date Pickers in Cypress', () => {

  it('Date Pickers', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Forms').click();
    cy.contains('Datepicker').click();

    // Date handling
    const date = new Date();
    const dateToSelect = date.getDate(); // Today’s date
    const month = 'May'; // Optional: you can use dynamic month logic here too
    const year = date.getFullYear(); // Get current year
    const dateToAssert = `${month} ${dateToSelect}, ${year}`; // What appears in input field

    // Now interact with the date picker
    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
      cy.wrap(input).click(); // Open the calendar
      cy.get('.day-cell').not('.bounding-month').contains(dateToSelect).click(); // Select today's date
      cy.wrap(input).should('have.value', dateToAssert); // Assert the input value
    });

  });

});
