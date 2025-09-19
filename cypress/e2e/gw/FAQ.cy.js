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
    cy.login(); // otomatis login pakai env
    cy.get('.swal2-confirm').click()

    //FAQ
    cy.wait(2000);
    cy.get(':nth-child(16) > .nav-link').click()
    //serch
    cy.get('#searchName').click()
    cy.get('#searchName').type('apa')
    cy.get('#searchName').clear()

    //kategori
    cy.get('#province_nameDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#province_nameDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#province_nameDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
   
    //pertanyaan A-Z
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    //pertanyaan Z-A
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    //jawaban A-Z
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    //jawaban Z-A
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    //kategori A-Z
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').click()
    //kategori Z-A
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(8) > .dropdown-item').click()
    //terbaru
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(9) > .dropdown-item').click()
    //terlama
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(10) > .dropdown-item').click()
    //default
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

     //tambah
    cy.get('.btn').click()
    cy.get('#categoryDropdown').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .dropdown-item').click()
    cy.get('[name="faq_question"]').click()
    cy.get('[name="faq_question"]').type('apa')
    cy.wait(1000)
    cy.get('[name="faq_answer"]').click()
    cy.get('[name="faq_answer"]').type('engga tau')
    cy.get('.card-body > .row > .text-end > .btn').click()
    cy.get('.swal2-confirm').click()

    //view
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(1) > a > .feather').click()
    cy.wait(3000)
    cy.get('.btn-close').click()

    //edit tidak bisa save
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('[name="faq_question"]').click()
    cy.get('[name="faq_question"]').clear()
    cy.get('[name="faq_question"]').type('coba lagi')
    cy.get('.card-body > .row > .text-end > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.get('#kembali').click()

    //hapus
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()


    })
    })
