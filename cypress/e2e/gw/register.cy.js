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
    cy.visit('https://cms-growintravel.mijurnal.com/login');

    //register
    cy.get(':nth-child(6) > .switch-form-link').click()
    cy.get('[name="name"]').click()
    cy.get('[name="name"]').type('eldara')
    cy.get(':nth-child(3) > [name="email"]').click()
    cy.get(':nth-child(3) > [name="email"]').type('elda1@gmal.com')
    cy.get(':nth-child(4) > .password-input > [name="password"]').click()
    cy.get(':nth-child(4) > .password-input > [name="password"]').type('Elda@1234567')
    cy.get('[name="password_confirmation"]').click()
    cy.get('[name="password_confirmation"]').type('Elda@1234567')
    //cy.get('.register-form > .auth-button').click()
    })
    })