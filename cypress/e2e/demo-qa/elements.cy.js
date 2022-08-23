import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBox.page"
import RadioButton from "../../pageObjects/RadioButton.page";
import WebTables from "../../pageObjects/WebTables.page";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });



    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
            // add the necessary steps
      TextBoxPage.fullName.type('Donald')
      TextBoxPage.email.type('test@test.com')
      TextBoxPage.currentAddress.type(`Melanie`)
      TextBoxPage.permamentAddress.type('Harry')
      TextBoxPage.Submit.click();
      TextBoxPage.pfullName.should("contain", 'Donald')
      TextBoxPage.pemail.should("contain", 'test@test.com')
      TextBoxPage.pcurrentAddress.should("contain", 'Melanie')
      TextBoxPage.ppermamentAddress.should("contain", 'Harry' )
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    it("Filling in Text Boxes", () => {
      // Click the "+"/expand button
      CheckBoxPage.expand.click();
    // Click Notes, React, Angular, General, Excel File.doc
    CheckBoxPage.notes.click();
    CheckBoxPage.react.click();
    CheckBoxPage.angular.click();
    CheckBoxPage.general.click();
    CheckBoxPage.excelFile.click();

    // Validate the clicked checkboxes
    CheckBoxPage.results.should('contain', 'notes')
    CheckBoxPage.results.should('contain', 'react')
    CheckBoxPage.results.should('contain', 'angular')
    CheckBoxPage.results.should('contain', 'general')
    CheckBoxPage.results.should('contain', 'excelFile')
    });
    // Create checkbox scenario 2:
    it("Check validation", () => {
      // Click expand button
      CheckBoxPage.expand.click();
      // Click Office
      CheckBoxPage.office.click();
          // Validate the checked checkboxes
    CheckBoxPage.clicked.click();
    CheckBoxPage.results.should('contain', 'office')
    CheckBoxPage.results.should('contain', 'public')
    CheckBoxPage.results.should('contain', 'private')
    CheckBoxPage.results.should('contain', 'classified')
    CheckBoxPage.results.should('contain', 'general')
    })
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButton.visit()

    })
    it("Valdate messages", () => {
      RadioButton.yesButton.click({force: true});
      RadioButton.yesClicked.should('contain', 'Yes')
      RadioButton.impressiveButton.click({force: true});
      RadioButton.yesClicked.should('contain', 'Impressive')
      RadioButton.noButton.should('be.disabled');
      
    })
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTables.visit();
    });

    it("Scenario Num 1", () => {
      WebTables.add.click();
      WebTables.firstName.type('Marta')
      WebTables.lastName.type('Liepa')
      WebTables.email.type('test@test.com')
      WebTables.age.type('26')
      WebTables.salary.type('1000')
      WebTables.department.type('finance')
      WebTables.submit.click();
      WebTables.search.type('Marta')
      WebTables.table.should('contain', 'Marta', 'Liepa', 'test@test.com', '26', '1000', 'finance')
    });
    
    it("Scenario Num 2", () => {
      WebTables.deleteButton.click();
      WebTables.noData.should('contain', 'No rows found')
    })
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {

    
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
