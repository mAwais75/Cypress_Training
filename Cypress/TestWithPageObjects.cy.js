import { NavigationTo } from "../support/Page_Objects/navigationPage.cy";
import { onFormLayoutPage } from "../support/Page_Objects/FormsLayoutPage.cy";

describe('Testing navigations using POM', ()=>{
    
    beforeEach('Open the app', ()=>{

        cy.OpenHomePage() //calling a custom command
    })

    it('Page Navigations', () => {

        NavigationTo.Layoutpage()
        NavigationTo.FormsPage()
        NavigationTo.TablesDataPage()
        
    });

    it.only('Should submit the inline and basic form and select the todays date from the date picker', () => {
    
        NavigationTo.FormsPage()
        onFormLayoutPage.submitInlineForm('awais','awais@test.com')
        onFormLayoutPage.submitBasicForm('awais@test.com','123')

    });
})

