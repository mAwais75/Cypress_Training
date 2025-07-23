describe('Lists and Dropdowns', () => {

  it('Drop Down Lists', () => {

    cy.visit('http://localhost:4200');

    // Simple Selection and Assertion
    cy.get('nav').find('nb-select').click();
    cy.get('.options-list').contains('Dark').click();
    cy.get('nav').find('nb-select').should('contain', 'Dark');

    // Enhanced Strategy – loop through options safely
    cy.get('nav').find('nb-select').then(dropDown => {
      cy.wrap(dropDown).click();

      // Use Cypress's retry-ability inside `each()`
      cy.get('.options-list nb-option').each(($el, index, $list) => {
        const itemText = $el.text().trim();

        // Click on the option
        cy.wrap($el).click();

        // Assert selection
        cy.get('nav').find('nb-select').should('contain', itemText);

        // Reopen the dropdown only if not the last item
        if (index < $list.length - 1) {
          cy.wrap(dropDown).click();
        }
      });
    });
  });
});
