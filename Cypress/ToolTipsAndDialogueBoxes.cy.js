describe('Tooltips and browser based dialogue boxes', ()=>{

    it('Tooltips', () => {

        cy.visit('http://localhost:4200');
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('Tooltip').click({force:true})

        cy.contains('nb-card', 'Colored Tooltips').contains('Default').click({force:true})
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    });

   it('Dialogue Boxes', () => {

  cy.visit('http://localhost:4200');
  cy.contains('Tables & Data').click();
  cy.contains('Smart Table').click();

  const stub = cy.stub(); // Create a stub to catch the confirm dialog
  cy.on('window:confirm', stub); // Register the listener BEFORE the action

  cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
    expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?');

  });
});
}); 