/// <reference types="cypress"/>

//import the page objects 
import homePageObjects from '../pageObjects/1-homePage'
import addComputer from '../pageObjects/3-addComputerPage'

describe('Add a new computer', function()
{
    //create a reference variable to call the methods from homePageObjects class
    const home = new homePageObjects()
    const addComp = new addComputer()

    it('Verify that the computer was created successfully', function()
    {
        //launch the website
        home.visit()

        //click on Add a new computer
        home.AddNewComputerButton()

        //Enter HP in Computer name field
        addComp.ComputerNameField('HP')

        //Enter 2022-09-08 in Introduced field
        addComp.introducedField('2022-09-08')

        //clear out any text in Discontinued field
        addComp.discontinuedField()

        //Select Evans & Sutherland from Company dropdown
        addComp.companyDropdown()

        //Click on Create this computer button
        addComp.createThisComputerButton()

        //Verify that the computer was created successfully
        addComp.successMessage()
    })   
})