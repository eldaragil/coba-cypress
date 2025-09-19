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

    //list informasi
    cy.get(':nth-child(19) > [data-bs-toggle="collapse"]').click()
    cy.get('#informations > .nav > :nth-child(1) > .nav-link').click()
    cy.get('.row > .ms-auto > .btn').click()
    cy.get('[name="title"]').click()
    cy.get('[name="title"]').type('coba')
    cy.get('#TipeDropdown').click()
    cy.get(':nth-child(2) > .dropdown-item').click()
    cy.get('[name="writer"]').click()
    cy.get('[name="writer"]').type('ujicoba')
    cy.get('[name="references"]').click()
    cy.get('[name="references"]').type('youtube')
    // Isi CKEditor 5 
    cy.window().then((win) => {
        const ckEditorInstance = win.document
          .querySelector('.ck-restricted-editing_mode_standard')
          ?.ckeditorInstance;
  
        if (ckEditorInstance) {
          ckEditorInstance.setData('<p>view mountain lincing is butifull</p>');
        } else {
          throw new Error('CKEditor instance not found');
        }
      });
    cy.get('input[type="file"]').eq(1).selectFile('cypress/fixtures/hma.jpeg', { force: true })
    //cy.get('input[type="file"]').eq(2).selectFile('cypress/fixtures/gunung.jpg', { force: true })
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //ujicoba
    cy.get('#searchName').click()
    cy.get('#searchName').type('ujicoba')
    cy.get('#searchName').clear()
    cy.get('#typeFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    //A-Z
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
    //Z-A
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
    //terbaru
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown-item').click()
    //terlama
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown-item').click()
    //default
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    //upload
    cy.get(':nth-child(1) > :nth-child(1) > .row-checkbox').click()
    cy.get('#upload-btn').click()
    cy.get('.swal2-confirm').click()
    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('[name="writer"]').clear()
    cy.get('[name="writer"]').type('ujiiiicba')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()
    //delete
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()

    //kategori informasi
    cy.get(':nth-child(19) > [data-bs-toggle="collapse"]').click()
    cy.get('#informations > .nav > :nth-child(2) > .nav-link').click()
    cy.get('.btn').click()
    cy.get('[name="information_type_name"]').click()
    cy.get('[name="information_type_name"]').type('cobaa')
    cy.get('.d-flex > .btn').click()
    cy.get('.swal2-confirm').click()
    //view
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(1) > a > .feather').click()
    cy.get('.btn-close').click()
    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('[name="information_type_name"]').click()
    cy.get('[name="information_type_name"]').clear()
    cy.get('[name="information_type_name"]').type('lagi oke')
    cy.get('.d-flex > .btn').click()
    cy.get('.swal2-confirm').click()

    //hps
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()

    })
    })