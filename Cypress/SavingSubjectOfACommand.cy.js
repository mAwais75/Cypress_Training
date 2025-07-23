describe('Saving subject of command for a later use to improve usability and maintainability',()=>{

    it('saving subject of a command using alias and then callback function', () => {

        cy.visit('http://localhost:4200');
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Test Case:
        //locating 'Using the Grid' section and finding email and password label
        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('have.text', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('have.text', 'Password')

        //Please look above we are repeating overselfs i.e. cy.contains('nb-card', 'Using the Grid')
        // WE CANT DO THING LIKE THIS
        // const usingTheGrid = cy.contains('nb-card', 'Using the Grid')
        // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
        // usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')

        //We can acheive the solution of the above problem by using cypress command alias .as() and .then() callback function
        
        //Solution-1 using .as() command of cypress
        cy. contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid'). find('[for="inputEmail1"]').should('have.text', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('have.text', 'Password')

        //Solution-2 using .then() callback Function
         cy. contains('nb-card', 'Using the Grid').then(usingTheGridForm=>{
            //we need to use .wrap() command of cypress because originally .then() is a JQuery function so,
            //we'll be unable to use the value and chain further because cypress will give the error and 
            //will not allow to use it for further chaining
            //in order to chain we will need to use .wrap command of cypress to chain it further to fulfill our goal
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('have.text', 'Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('have.text', 'Password')
         })



    });
})