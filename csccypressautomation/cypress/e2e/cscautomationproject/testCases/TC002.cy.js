/// <reference types="cypress"/>

import homePageObjects from '../pageObjects/1-homePage'

describe('Filter computer list by “HP” and create a map of the returned data.', function()
{
    //create a reference variable to call the methods from homePageObjects class
    const home = new homePageObjects()

    it('Print the map.', function()
    {
        //launch the website
        home.visit()

        //clear the search box and type HP in the search box
        home.searchbox('HP ')

        //click on Filter by name button
        home.filterByNameButton()

        //Print the map of table data
        home.tableData()
    })  
})