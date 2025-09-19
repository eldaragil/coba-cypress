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
    //login
    cy.login()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()

    //
    cy.get(':nth-child(4) > .collapsed').click()
    cy.get('#amenities > .nav > :nth-child(1) > .nav-link').click()
    cy.get('#searchName').click()
    cy.get('#searchName').type('est')
    cy.get('#searchName').clear()
    cy.get('#amenity_typeDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#amenity_typeDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#amenity_typeDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
     cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
     cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
     cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
     cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').click()
     cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(8) > .dropdown-item').click()
     cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    cy.get(':nth-child(1) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    cy.get('[name="amenity_name"]').click()
    cy.get('[name="amenity_name"]').clear()
    cy.get('[name="amenity_name"]').type('ganti')
    cy.get('#form-amenity-edit > .text-end > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
    cy.get('.btn').click()
    cy.get('#selected-icon-display').click()
    cy.get('#iconResults > :nth-child(1) > img').click()
    cy.get('[name="amenity_name"]').click()
    cy.get('[name="amenity_name"]').type('opsi coba')
    cy.get('#typeDropdown').click()
    cy.get('[data-value="Include"]').click()
    cy.get('.card-body > .row > .text-end > .btn').click()
    cy.get('.swal2-confirm').click()
    
    //icon anitiess
    cy.get(':nth-child(4) > .collapsed').click()
    cy.get('#amenities > .nav > :nth-child(2) > .nav-link').click()
    
    //cari
    cy.get('#searchName').click()
    cy.get('#searchName').type('coba')
    cy.wait(1000)
    cy.get('#searchName').clear()

    //tambah
    cy.get('.btn').click()
    cy.get(':nth-child(2) > [name="icon_type"]').click()
    cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/gunung.svg', { force: true })
    cy.get('[name="icon_name"]').click()
    cy.get('[name="icon_name"]').type('gunung')
    cy.get('.card-body > .row > .text-end > .btn').click()
    cy.wait(1000)
    cy.get('.swal2-confirm').click()
    edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    cy.get('[name="icon_name"]').click()
    cy.get('[name="icon_name"]').clear()
    cy.get('[name="icon_name"]').type('icm 01')
    cy.get('#form-main > .text-end > .btn').click()
    cy.get('.swal2-confirm').click()

    //delet
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()


    })
    })
