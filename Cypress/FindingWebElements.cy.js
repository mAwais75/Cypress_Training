describe('Finding Web Elements by chaining commands using find, get and contains and difference between them', () => {
  
    it('Contains, find and get command usage and difference of scope of work', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

// Theory:
// get() - get method finds elements on the page by locator globally - It find element that is located on the whole webpage
// find() - find child elements by locator - it can only fire as a chain command not directly with the cy itself 
// contains() - find HTML text and by text and locator

//Practical Demonstration:

        // Test Case:
        // ngx admin - Forms - Form Layouts 
        // we wanna test that if we click on sign in button using the contains command what will happen because 
        // we have another sign in button on the same webpage

        cy.contains('Sign in') // it will locate only the first matched Sign in text and will leave the second one
       
        cy.contains('[status="warning"]','Sign in') // if we want to click on the last sign in button we need to uniquely identify it. we did it using a unique property "status" and its value "warning" 
       
        cy.contains('nb-card', 'Horizontal form').find('button') //another way to uniquely identify the element is to use parent element that is a class in our case and then fire find command to find the child of it and that is a button in our case
       
        cy.contains('nb-card', 'Horizontal form').get('button')// if we use get in this it will locate all the buttons on the page instead of the button located in the specific class

        cy.contains('nb-card', 'Horizontal form').contains('Sign in') //acheiving the above task using contains 
        
        //Cypress chains/Chaining and DOM
        
         // Test Case:
        // ngx admin - Forms - Form Layouts 
        // we want to tick the check box that is above the sign in button that have "Horizontal form" label text

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('have.text', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click() //after firing cypress action command like click() we acnnot chain further because the action command will change the structure of the DOM and cypress will not be able to take the snapshot of it and will show the error that cypress is unable to locate the element
    });

});
