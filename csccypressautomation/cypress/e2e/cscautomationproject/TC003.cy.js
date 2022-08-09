/// <reference types="cypress"/>
describe('Filter computer list by “IBM” and return a list of computer names on the LAST page of the results.', function()
{
    it('Print the list of computer names', function()
    {
        //launch the website
        cy.visit('https://computer-database.gatling.io/computers')
        //clear the search box and type any random text to make sure nothing returns
        cy.get('#searchbox').clear().type('IBM')
        //click on Filter by name button
        cy.get('#searchsubmit').click()
        //itirate the Next button and go to last page then print the table data
        for (var i = 1; i < 5; i++) {
        cy.get('#pagination > ul > li.next > a').click()
        cy.get('#main > table > tbody >tr')
        .each(function($row, index, $rows)
        {
            cy.wrap($row).within(function(){
            cy.get('td').each(function($cellData, index, $columns){
            cy.log($cellData.text())
            })

            })
        })
   }
    })   
})