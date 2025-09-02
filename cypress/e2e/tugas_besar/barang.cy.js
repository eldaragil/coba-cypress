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
    
    // //kategori
    // cy.get('#masterDropdown').click()
    // cy.get('[href="http://127.0.0.1:8000/barang"]').click()
    // // //create
    // // cy.get('.d-flex > .btn').click()
    // // cy.get('[name="nama"]').click()
    // // cy.get('[name="nama"]').type('diamond')
    // // cy.get('[name="harga"]').click()
    // // cy.get('[name="harga"]').type(2000)
    // // cy.get('.btn-primary').click()
    
    // // //edit
    // // cy.get(':nth-child(1) > :nth-child(7) > .btn-warning').click()
    // // cy.get('[name="nama"]').click()
    // // cy.get('[name="nama"]').clear()
    // // cy.get('[name="nama"]').type('emas')
    // // cy.get('.btn-success').click()

    // //delete
    // //cy.get(':nth-child(1) > :nth-child(7) > .d-inline > .btn').click()

    // //cari
    // cy.get('[name="search"]').click()
    // cy.get('[name="search"]').type('aku')
    // cy.get('.col-auto > .btn').click()

    // // cy.get('[name="nama"]').click()
    // // cy.get('[name="nama"]').type('akuu');
    // // cy.get('form > button').click()
    // //edit
    // // cy.get(':nth-child(1) > :nth-child(3) > .btn-warning').click()
    // // cy.get('[name="nama"]').click()
    // // cy.get('[name="nama"]').clear()
    // // cy.get('[name="nama"]').type('oreo');
    // // cy.get('form > .btn').click()
    // //delete
    // //cy.get(':nth-child(3) > :nth-child(3) > .d-inline > .btn').click()
    // //serch
    // // cy.get('[name="search"]').click()
    // // cy.get('[name="search"]').type('harga')
    // // cy.get('.col-auto > .btn').click()

    



})
})