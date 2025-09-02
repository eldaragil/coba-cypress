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

    //pembeli
    cy.get('#masterDropdown').click()
    cy.get('[href="http://127.0.0.1:8000/pembeli"]').click()

    // //create
    // cy.get('.d-flex > .btn').click()
    // cy.get('[name="nama"]').click()
    // cy.get('[name="nama"]').type('ragil')
    // cy.get('[name="alamat"]').click()
    // cy.get('[name="alamat"]').type('sidobandung')
    // cy.get('[name="no_hp"]').click()
    // cy.get('[name="no_hp"]').type('085854711176')
    // cy.get('.btn-success').click()

    //edit
    // cy.get(':nth-child(2) > :nth-child(6) > .btn-warning').click()
    // cy.get('[name="nama"]').click()
    // cy.get('[name="nama"]').clear()
    // cy.get('[name="nama"]').type('alinske')
    // cy.get('.btn-success').click()

    //delete
    //cy.get(':nth-child(2) > :nth-child(6) > .d-inline > .btn').click()

    //search
    cy.get('[name="search"]').click()
    cy.get('[name="search"]').type('dis')
    cy.get('.col-auto > .btn').click()
         
})
})