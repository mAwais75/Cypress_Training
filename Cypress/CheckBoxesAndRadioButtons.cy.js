describe('Check Boxes and Radio Buttons',()=>{

    it('Radio Buttons', () => {

        cy.visit('http://localhost:4200');
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Test Case
        //ngx admin - Forms - Form Layouts
        //using the Grid section
        //Working with radio buttons

       cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons => {
       cy.wrap(radioButtons).eq(0).check({ force: true }).should('be.checked');
       cy.wrap(radioButtons).eq(1).check({ force: true });
       cy.wrap(radioButtons).eq(0).should('not.be.checked');
       cy.wrap(radioButtons).eq(2).should('be.disabled');
});
});

    it('Check Boxes', () => {
        cy.visit('http://localhost:4200');
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').check({force:true})

    });
})