import{Given,Then,And} from 'cypress-cucumber-preprocessor/steps';

Given("I launch the URL", () => {
  cy.visit("https://docs.cypress.io/app/get-started/why-cypress");
});

Then("I Verify the Title", () => {
  cy.title().should(
    "eq",
    "title | Cypress Documentation | Cypress Documentation"
  );
});

And("I verify the URL", () => {
  cy.url.should("eq", "https://docs.cypress.io/app/get-started/why-cypress");
});