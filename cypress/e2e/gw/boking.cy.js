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

    //boking
    cy.get(':nth-child(8) > .nav-link').click()
    cy.get('#searchName').click()
    cy.get('#searchName').type('christa')
    cy.get('#searchName').clear()
    //low season
    cy.get('#seasonFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    //high season
    cy.get('#seasonFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    //semua
    cy.get('#seasonFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    //tanggal
    cy.get('#bookingDateFilterDropdown').click()
    cy.get('#daterange').click()
    cy.get('.today').click()
    cy.get('[aria-label="September 12, 2025"]').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    //kategori
    cy.get('#packageCategoryFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    //privat trip
    cy.get('#packageCategoryFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    //solo trip
    cy.get('#packageCategoryFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    //default
    cy.get('#packageCategoryFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //setatus
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    //half paid
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    //full paid
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    //on going
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    //up coming
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').click()
    //completed
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(8) > .dropdown-item').click()
    //cancelled
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(9) > .dropdown-item').click()
    //semua
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //urutkan
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    //Z-A
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()

    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()

    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()

    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //view
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(1) > a > .feather').click()
    cy.get('#kembali').click()
    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('#kembali').click()


    })
    })