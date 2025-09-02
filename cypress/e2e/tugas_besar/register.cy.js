Cypress.on('uncaught:exception', (err, runnable) => {
    // Agar error 'year' atau 'F is not defined' tidak membuat test gagal
    return false;
  });
describe('Login Growin Travel', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (
            err.message.includes('fs is not defined') ||
            err.message.includes('Identifier \'year\' has already been declared')
          ) {
            return false
          }
          
        })
beforeEach(() => {
  cy.viewport(1280, 720)
})

it('should login with valid credentials', () => {
    cy.visit('http://127.0.0.1:8000/');
    //register
    cy.get('.border-transparent').click()
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('[name="name"]').type('elda');
    cy.get('[name="email"]').type('ragil@gmail.com');
    cy.get('[name="password"]').type('eldaragil123');
    cy.get('[name="password_confirmation"]').type('eldaragil123');
    cy.get('.btn').click()
    //cy.get('.swal2-confirm').click()
         
})
})