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

    //login
    cy.get(':nth-child(1) > [name="email"]').click()
    cy.get(':nth-child(1) > [name="email"]').type('admin123@gmail.com')
    cy.get(':nth-child(2) > .password-input > [name="password"]').click()
    cy.get(':nth-child(2) > .password-input > [name="password"]').type('Admin@123')
    cy.get('#login-form > .auth-button').click()
    cy.get('.swal2-confirm').click()

    //gallery
     cy.get(':nth-child(18) > .nav-link').click()
    cy.get('.ms-auto > .btn').click()
    cy.get('#destinationDropdown').click()
    cy.get(':nth-child(142) > .dropdown-item').click()
    cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/ppl.png', { force: true })
    cy.get('#submitButton').click()

    //cari
    cy.get('#searchName').click()
    cy.get('#searchName').type('922')
    cy.get('#searchName').clear()
    //terbaru
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
    //terlama
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
    //default
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    //
    // cy.get('#dropdownMenuButton06f11378-8949-4adf-acbc-cd8717c211e0>.feather').click()
    // cy.get(':nth-child(1) > .card > .card-img-top > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    })
    })