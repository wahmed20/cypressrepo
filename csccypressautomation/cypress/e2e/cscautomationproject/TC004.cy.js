/// <reference types="cypress"/>
describe('Add a new computer', function()
{
    it('Verify that the computer was created successfully', function()
    {
        //launch the website
        cy.visit('https://computer-database.gatling.io/computers')
        //click on Add a new computer
        cy.get('#add').click()
        //Enter HP in Computer name fiel
        cy.get('#name').clear().type('HP')
        //Enter 2022-09-08 in Introduced fiel
        cy.get('#introduced').clear().type('2022-09-08')
        //clear out any text in Discontinued field if exist
        cy.get('#discontinued').clear()
        //Select Evans & Sutherland from Company dropdown
        cy.get('#company').select('Evans & Sutherland')
        //Click on Create this computer button
        cy.get('input[value="Create this computer"]').click()
        //Verify that the computer was created successfully
        cy.get('#main > div.alert-message.warning').contains('Done ! Computer HP has been created')
    })   
})