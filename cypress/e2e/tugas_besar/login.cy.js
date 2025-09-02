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
    //login
    cy.get('.border-transparent').click()
    cy.get('[name="email"]').type('ragilalinski@gmail.com');
    cy.get('[name="password"]').type('ragilelda123')
    cy.get('.btn-primary').click()
    //cy.get('.swal2-confirm').click()
         
})
})