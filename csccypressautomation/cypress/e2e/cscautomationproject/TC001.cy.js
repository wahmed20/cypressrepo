/// <reference types="cypress"/>
describe('Locate the following computer in the table: Commodore 64', function()
{
    it('Create a negative test case to ensure a failure validation displays.', function()
    {
        //launch the website
        cy.visit('https://computer-database.gatling.io/computers')
        //Requirements mentioned Click to edit Commodore 64 but I don't see any Edit button
        //clear the search box and type any random text to make sure nothing returns
        cy.get('#searchbox').clear().type('random')
        //click on Filter by name button
        cy.get('#searchsubmit').click()
        //Verify nothing returns in the search results
        cy.get('#main > div.well > em').contains('Nothing to display')
    })   

    it('Create a positive test case to ensure that valid data is updated successfully.', function()
    {
        //launch the website
        cy.visit('https://computer-database.gatling.io/computers')
        //filter the search with Commodore 64
        cy.get('#searchbox').clear().type('Commodore 64')
        //click on Filter by name button
        cy.get('#searchsubmit').click()
        //select the first item in the list
        cy.get('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        //clear the text from Computer name field then enter Commodore 64
        cy.get('#name').clear().type('Commodore 64')
        //click on save this computer
        cy.get('input[value="Save this computer"]').click()
        //verify the success message
        cy.get('#main > div.alert-message.warning').contains('Done ! Computer Commodore 64 has been updated')

    })  
})