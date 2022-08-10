class editComputer
{
    computerName(value)
    {
        const computerName = cy.get('#name')
        computerName.clear()
        computerName.type(value)
        return this
    }

    saveComputerButton(value)
    {
        const saveComputerButton = cy.get('input[value="Save this computer"]')
        saveComputerButton.click()
        return this
    }

    successMessage()
    {
        const successMessage = cy.get('#main > div.alert-message.warning')
        successMessage.contains('Done ! Computer Commodore 64 has been updated')
        return this
    }

}
export default editComputer