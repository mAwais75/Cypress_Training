describe('Extracting the text values using different methods and asserting that values', ()=>{

    it('Extract Text Values', () => {
        cy.visit('http://localhost:4200');
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //Test Case:
        //ngx admin - Forms - Form Layouts
        //Extracting the text value i.e. Email Address from Basic Form section
        //below ae the strategies to acheive our targeted goal

        //Strategy No.1
        cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address')

        //Strategy No.2
        cy.get('[for="exampleInputEmail1"]').then(label=>{
            const labelText=  label.text() ////label is now a JQuery object so, we will use .text() to extract the text as it is also a JQuery function
            //expect(labelText).to.equal('Email address')// Expect is a chai assertion 
            cy.wrap(labelText).should('contain', 'Email address') //we can use wrap also
        })

        //Strategy No.3
         cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain','Email address' )

            //note: 
            //We can use alias .as() also if we need to use this text value anywhere else in this test block
            // cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain','Email address' )
         
            //Strategy No.4
         cy.get('[for="exampleInputEmail1"]').invoke('text').then(text=>{
            //here the text is a pure text value not a JQuery object
            expect(text).to.equal('Email address') //we can simply assert the value as its a pure text

            //Strategy No.5
            //this is the use case of .invoke() attribute
            //what if we want to make sure that the text we are getting has the class of label
             cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue=>{
                expect(classValue).to.equal('label')

            //Strategy No.6
            //This is the use case of .invoke() prroperty to make sure that the email field is containing the enterted value of email address
            //in order to achieve our target we first identify the email address field locater and then type value and then invoke the property
            cy.get('#exampleInputEmail1').type('awais@test.com').invoke('prop','value').should('contain','awais@test.com') 
            
             })
         })

    });
})