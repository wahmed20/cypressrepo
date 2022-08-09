/// <reference types="cypress"/>
describe('Filter computer list by “HP” and create a map of the returned data.', function()
{
    it('Print the map.', function()
    {
        //launch the website
        cy.visit('https://computer-database.gatling.io/computers')
        //clear the search box and type any random text to make sure nothing returns
        cy.get('#searchbox').clear().type('HP ')
        //click on Filter by name button
        cy.get('#searchsubmit').click()
        //Print the map of table data
        cy.get('#main > table > tbody >tr')
        .each(function($row, index, $rows)
        {
            cy.wrap($row).within(function(){
            cy.get('td').each(function($cellData, index, $columns){
            cy.log($cellData.text())
            })

            })
        })
    })  
})