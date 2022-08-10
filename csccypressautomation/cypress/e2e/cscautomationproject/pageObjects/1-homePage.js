class homePageObjects
{
    visit()
    {
        cy.visit('https://computer-database.gatling.io/computers')
    }

    searchbox(value)
    {
        const searchbox = cy.get('#searchbox')
        searchbox.clear()
        searchbox.type(value)
        return this
    }

    searchboxwarning()
    {
        const searchboxwarning = cy.get('#searchsubmit').click()
        cy.get('#searchbox:invalid')
        .invoke('prop', 'validationMessage')
        .should('equal', 'Please fill out this field.')
        return this
    }

    filterByNameButton()
    {
        const filterByName = cy.get('#searchsubmit')
        filterByName.click()
        return this
    }

    AddNewComputerButton()
    {
        const AddNewComputerButton = cy.get('#add')
        AddNewComputerButton.click()
        return this
    }

    searchResults()
    {
        const searchResults = cy.get('#main > div.well > em')
        searchResults.contains('Nothing to display')
        return this
    }

    firstComputer()
    {
        const firstItem = cy.get('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a')
        firstItem.click()
        return this   
    }

    tableData()
    {
        const tableData = cy.get('#main > table > tbody >tr')
        .each(function($row, index, $rows)
        {
            cy.wrap($row).within(function(){
            cy.get('td').each(function($cellData, index, $columns){
            cy.log($cellData.text())
            })

            })
        })
        return this
    }

    pagination()
    {
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
        return this   
    }
    
}
export default homePageObjects