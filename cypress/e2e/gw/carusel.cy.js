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

    //carusel
    cy.get('.sidebar-body > :nth-child(1) > :nth-child(17)').click()
    cy.get('.btn').click()
    cy.get('[name="carousel_title"]').click()
    cy.get('[name="carousel_title"]').type('Mountain Lincing')
    cy.get('[name="carousel_subtitle"]').click()
    cy.get('[name="carousel_subtitle"]').type('view mountain lincing')
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
    cy.get('input[type="file"]').eq(1).selectFile('cypress/fixtures/gunung.jpg', { force: true })
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //serch
    cy.get('#searchName').click()
    cy.get('#searchName').type('lincing')
    cy.get('#searchName').clear()
    //
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
    //terlama
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
    //default
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown-item').click()

    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('[name="carousel_title"]').click()
    cy.get('[name="carousel_title"]').type('Mountain Lincing good')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //delete
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
    
    })
    })