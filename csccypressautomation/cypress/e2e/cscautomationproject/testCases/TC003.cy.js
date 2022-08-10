/// <reference types="cypress"/>

//import the page objects 
import homePageObjects from '../pageObjects/1-homePage'

describe('Filter computer list by “IBM” and return a list of computer names on the LAST page of the results.', function()
{
    //create a reference variable to call the methods from homePageObjects class
    const home = new homePageObjects()

    it('Print the list of computer names', function()
    {
        //launch the website
        home.visit()

        //clear the search box and type IBM in the search box
        home.searchbox('IBM')
        
        //click on Filter by name button
        home.filterByNameButton()

        //itirate the Next button and go to last page then print the table data
        home.pagination()
    })   
})