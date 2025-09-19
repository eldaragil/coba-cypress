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
    cy.login();
    cy.wait(500)
    cy.get('.swal2-confirm').click()

    //police
    cy.get('.sidebar-body > :nth-child(1) > :nth-child(20)').click()
    cy.get('.btn').click()
    cy.get('[name="policy_title"]').click()
    cy.get('[name="policy_title"]').type('standart')
    // Isi CKEditor 5 
    cy.window().then((win) => {
        const ckEditorInstance = win.document
          .querySelector('.ck-restricted-editing_mode_standard')
          ?.ckeditorInstance;
  
        if (ckEditorInstance) {
          ckEditorInstance.setData('<p>uji standart coba</p>');
        } else {
          throw new Error('CKEditor instance not found');
        }
      });
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //serch
    cy.get('#searchName').click()
    cy.get('#searchName').type('standart')
    cy.get('#searchName').clear()
    cy.get('#sortFilterDropdown').click()
    //A-z
    cy.get(':nth-child(3) > .dropdown-item').click()
    //Z-A
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
    //des A-Z
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown-item').click()
    //des Z-A
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown-item').click()
    //terbaru
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(7) > .dropdown-item').click()
    //terlama
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(8) > .dropdown-item').click()
    //defaul
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown-item').click()

    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(1) > a > .feather').click()
    cy.get('#backButton').click()
    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('[name="policy_title"]').click()
    cy.get('[name="policy_title"]').clear()
    cy.get('[name="policy_title"]').type('maximal')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()
    cy.get('#cancelButton').click()
    //hapus belum bisa
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
    

    })
    })
