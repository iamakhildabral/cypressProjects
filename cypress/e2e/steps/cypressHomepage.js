import{Given,Then,And} from 'cypress-cucumber-preprocessor/steps';



Given("I launch the URL", () => {
  cy.visit("https://www.reddit.com/r/Playwright/comments/1iwc0ws/end_to_end_testing_in_playwright/?rdt=34302");
});

Then("I Verify the Title", () => {
  cy.title().should(
    "eq",
    "End to end testing in Playwright : r/Playwright"
  );
});

And("I verify the URL", () => {
  cy.url().should('include',"/end_to_end_testing_in_playwright");
});

And("Verify the Text Present in the Webpage",()=>{
  // cy.contains("How to effectively achieve end to end testing in playwright were an output of one case is dependent upon another one?").should("be.visible");
  cy.get('p').should('contain.text',"How to effectively achieve end to end testing in playwright were an output of one case is dependent upon another one?");
})