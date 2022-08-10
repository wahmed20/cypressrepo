/// <reference types="cypress"/>

//import the page objects 
import homePageObjects from '../pageObjects/1-homePage'
import editComputer from '../pageObjects/2-editComputerPage'

describe('Locate the following computer in the table: Commodore 64', function()
{
    //create a reference variable to call the methods from homePageObjects class
    const home = new homePageObjects()
    const editComp = new editComputer()
    
    it('Create a negative test case to ensure a failure validation displays.', function()
    {
        
        //launch the website
        home.visit()

        //Verify a warning message if the user clicks on Filter by name without entering anything in the 
        // search box.
        home.searchboxwarning()

        //Requirements mentioned Click to edit Commodore 64 but I don't see any Edit button
        //clear the search box and type any random text to make sure nothing returns
        home.searchbox('random')
        
        //click on Filter by name button
        home.filterByNameButton()

        //Verify nothing returns in the search results
        home.searchResults()
    })   

    it('Create a positive test case to ensure that valid data is updated successfully.', function()
    {
        //launch the website
        home.visit()

        //filter the search with Commodore 64
        home.searchbox('Commodore 64')

        //click on Filter by name button
        home.filterByNameButton()

        //select the first item in the list
        home.firstComputer()

        //clear the text from Computer name field then enter Commodore 64
        editComp.computerName('Commodore 64')

        //click on save this computer
        editComp.saveComputerButton()
        
        //verify the success message
        editComp.successMessage()

    })  
})