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


    //list addiontonal
    // cy.get(':nth-child(3) > .collapsed').click()
    // cy.get('#additional-services > .nav > :nth-child(1) > .nav-link').click()
    // cy.get('#searchName').click()
    // cy.get('#searchName').type('et')
    // cy.get('#searchName').clear()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').click()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(8) > .dropdown-item').click()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(9) > .dropdown-item').click()
    // cy.get('#AdditionalCategoryFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    // // cy.get(':nth-child(1) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    // // cy.get('[name="additional_name"]').click()
    // // cy.get('[name="additional_name"]').type('cobaa')
    // // cy.get('#submitButton').click()
    // // cy.get('.swal2-confirm').click()
    // // cy.get('#kembali').click()

    // cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    // cy.get('.swal2-confirm').click()
    // cy.get('.swal2-confirm').click()
    // cy.get('.btn').click()
    // cy.get('[name="additional_name"]').click()
    // cy.get('[name="additional_name"]').type('ujivba')
    // cy.get('#categoryDropdown').click()
    // cy.get(':nth-child(2) > .dropdown-item').click()
    // cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/hma.jpeg', { force: true })
    // cy.get('input[type="file"]').eq(1).selectFile('cypress/fixtures/hma.jpeg', { force: true })
    // cy.get('#submitButton').click()
    // cy.get('.swal2-confirm').click()

    //kategori
    cy.get(':nth-child(3) > .collapsed').click()
    cy.get('#additional-services > .nav > :nth-child(2) > .nav-link').click()
    // cy.get('#searchName').click()
    // cy.get('#searchName').type('cinta')
    // cy.get('#searchName').clear()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(3) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(4) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(5) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(6) > .dropdown-item').click()
    // cy.get('#sortFilterDropdown').click()
    // cy.get(':nth-child(2) > .dropdown-item').click()

    //tambah
    // cy.get('.btn').click()
    // cy.get('[name="additional_service_category_name"]').click()
    // cy.get('[name="additional_service_category_name"]').type('cobalagi')
    // cy.get('.d-flex > .btn').click()
    // cy.get('.swal2-confirm').click()

    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    cy.get('[name="additional_service_category_name"]').click()
    cy.get('[name="additional_service_category_name"]').clear()
    cy.get('[name="additional_service_category_name"]').type('ujii ubb')
    cy.get('.d-flex > .btn').click()
    cy.get('.swal2-confirm').click()

    //hapus
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()






    })
    })