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

    //kupon
    cy.get(':nth-child(13) > .nav-link').click()
    cy.get('.btn').click()
    cy.get('[name="coupon_name"]').click()
    cy.get('[name="coupon_name"]').type('hutri')
    cy.get('[name="coupon_code"]').click()
    cy.get('[name="coupon_code"]').type('6321')
    cy.get('#unlimited_quota').click()
    cy.get(':nth-child(4) > .form-check').click()
    cy.get('[name="discount_nominal"]').click()
    cy.get('[name="discount_nominal"]').type('50000')
    cy.get('input[type="file"]', { timeout: 10000 })
    .selectFile('cypress/fixtures/ppl.png', { force: true });
    cy.get('.card-body > .text-end > .btn').click()
    cy.get('.swal2-confirm').click()
    cy.get('#kembali').click()

    //edit kupon
   cy.get(':nth-child(2) > :nth-child(8) > .list-unstyled > :nth-child(2) > a > .feather').click()
   cy.get('[name="coupon_name"]').click()
   cy.get('[name="coupon_name"]').clear()
   cy.get('[name="coupon_name"]').type('ULTAHH')
   cy.get('.card-body > .text-end > .btn').click()
   cy.get('.swal2-confirm').click()

   //serch
   cy.get('#searchName').click()
   cy.get('#searchName').type('ULTAHH')
   cy.get('#searchName').click()
   cy.get('#searchName').clear()
   // inactive
   cy.get('#coupon_statusDropdown').click()
   cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
   // Active
   cy.get('#coupon_statusDropdown').click()
   cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
   //expired
   cy.get('#coupon_statusDropdown').click()
   cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
   //semua
   cy.get('#coupon_statusDropdown').click()
   cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
   //percentage
   cy.get('#coupon_typeDropdown').click()
   cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
   //nominal
   cy.get('#coupon_typeDropdown').click()
   cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
   //semua
   cy.get('#coupon_typeDropdown').click()
   cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
   // nama A-Z
   cy.get('#sortFilterDropdown').click()
   cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
   // nama Z-A
   cy.get('#sortFilterDropdown').click()
   cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
   //Kode A-Z
   cy.get('#sortFilterDropdown').click()
   cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
   //Kode Z-A
   cy.get('#sortFilterDropdown').click()
   cy.get(':nth-child(6) > .dropdown-item').click()
   //kode terbaru
   cy.get('#sortFilterDropdown').click()
   cy.get(':nth-child(7) > .dropdown-item').click()
   //kode terlama
   cy.get('#sortFilterDropdown').click()
   cy.get(':nth-child(8) > .dropdown-item').click()
   //terbaru
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(9) > .dropdown-item').click()
    //terlama
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(10) > .dropdown-item').click()
    //default
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //view
    cy.get(':nth-child(3) > :nth-child(8) > .list-unstyled > :nth-child(1) > a > .feather').click()
    cy.get('#closeModalBtn').click()

   //delete
    cy.get(':nth-child(1) > :nth-child(8) > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()

    })
    })