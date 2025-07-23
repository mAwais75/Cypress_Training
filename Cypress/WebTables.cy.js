describe('Web Tables in Cypress', ()=>{

    it('Tables', () => {
        
        cy.visit('http://localhost:4200');
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click() 

        //Scenario:1 Get the row by Text
        //Use case: get the row with the name john and then click on edit button
        //edit the age and save the row. Implement assertion to make sure 
        //the edited value has been displayed or not

        cy.get('tbody').contains('tr', 'John').then(tableRows=>{
            cy.wrap(tableRows).find('.nb-edit').click()
            cy.wrap(tableRows).find('[placeholder="Age"]').clear().type('50')
            cy.wrap(tableRows).find('.nb-checkmark').click()
            cy.wrap(tableRows).find('td').eq(6).should('contain', '50')
        })

        //Scenario:2 Get the row by an index
        //Use case: add a new row in the table by clicking on plus sign that is located 
        //in the head of the table 

        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow=>{
            cy.wrap(tableRow).find('[placeholder="ID"]').type(200)
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Awais')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Khalid')
            cy.wrap(tableRow).find('[placeholder="Username"]').type('@Khalid')
            cy.wrap(tableRow).find('[placeholder="E-mail"]').type('awais@gmail.com')
            cy.wrap(tableRow).find('[placeholder="Age"]').type('33')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            
        })

        //Scenario:3 Implement relevant assertions to make sure the new record has been added and 
        // displayed in the first row of the table
        
    cy.get('tbody').find('tr').first().find('td').then(tableCells=>
    {
        cy.wrap(tableCells).eq(1).should('contain','200')
        cy.wrap(tableCells).eq(2).should('contain','Awais')
        cy.wrap(tableCells).eq(3).should('contain','Khalid')
        cy.wrap(tableCells).eq(4).should('contain','@Khalid')
        cy.wrap(tableCells).eq(5).should('contain','awais@gmail.com')
        cy.wrap(tableCells).eq(6).should('contain','33')

    })

    //Scenario:4 automating filtering data feature based on a specific column i.e. age in our case

    const age=[20, 40, 200]
    cy.wrap(age).each(age=>{
    cy.get('thead').find('tr').find('[placeholder="Age"]').clear().type(age)
    cy.wait(500)
    cy.get('tbody tr').each(tableRow=>{
        if(age==200){
            cy.wrap(tableRow).should('contain', 'No data found')
        }
        else{
        cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        }
    })
    })
        
    });
})