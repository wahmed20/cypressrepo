class addComputer
{
    ComputerNameField(value)
    {
        const ComputerNameField = cy.get('#name')
        ComputerNameField.clear()
        ComputerNameField.type(value)
        return this
    }

    introducedField(value)
    {
        const introducedField = cy.get('#introduced')
        introducedField.clear()
        introducedField.type(value)
        return this
    }

    discontinuedField()
    {
        const discontinuedField = cy.get('#discontinued')
        discontinuedField.clear()
        return this
    }

    companyDropdown()
    {
        const companyDropdown = cy.get('#company')
        companyDropdown.select('Evans & Sutherland')
        return this
    }

    createThisComputerButton()
    {
        const createThisComputerButton = cy.get('input[value="Create this computer"]')
        createThisComputerButton.click()
        return this
    }

    successMessage()
    {
        const successMessage = cy.get('#main > div.alert-message.warning')
        successMessage.contains('Done ! Computer HP has been created')
        return this
    }

}
export default addComputer