Cypress.Commands.add("login", () => {
  cy.visit("/login");

  cy.get("#login-form > :nth-child(1) > input")
    .type(Cypress.env("username"));

  cy.get("#login-password")
    .type(Cypress.env("password"));

  cy.get("#login-form > .auth-button").click();
});
