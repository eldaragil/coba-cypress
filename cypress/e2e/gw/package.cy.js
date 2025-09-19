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
    cy.wait(1000)
    cy.get('.swal2-confirm').click()

    // //
     cy.get(':nth-child(6) > .nav-link').click()
    cy.get('#searchName').click()
    cy.get('#searchName').type('889')
    cy.get('#searchName').clear()

    //
    cy.get('#typeFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#typeFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#typeFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //
    cy.get('#destinationFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#destinationFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#destinationFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    cy.get('#destinationFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    cy.get('#destinationFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //
    cy.get('#priceFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#priceFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#priceFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    cy.get('#priceFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    cy.get('#priceFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(8) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(8) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(9) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(10) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(11) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //unggah
    cy.get(':nth-child(1) > :nth-child(1) > .row-checkbox').click()
    cy.get('#upload-btn').click()
    cy.get('.swal2-confirm').click()

    //view 
    cy.get(':nth-child(1) > :nth-child(9) > .list-unstyled > :nth-child(1) > a > .feather').click()
    cy.get('#kembali').click()

    //edit
    cy.get(':nth-child(1) > :nth-child(9) > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('#additionalDropdown').click()
    cy.get('.additional-item-row > .col-lg-8 > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
    cy.get('[name="additional_services[0][additional_price]"]').click()
    cy.get('[name="additional_services[0][additional_price]"]').type('2000')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //tambah
  //   cy.get('.row > .ms-auto > .btn').click()
  //   cy.get('[name="package_name"]').click()
  //   cy.get('[name="package_name"]').type('oke')
  //   cy.get('#typeDropdown').click()
  //   cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
  //   cy.get('[name="trip_duration"]').click()
  //   cy.get('[name="trip_duration"]').type('4 hari')
  //   cy.get('#categoryDropdown').click()
  //   cy.get(':nth-child(9) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
  //   cy.get(':nth-child(12) > .custom-multi-select > .multi-select-wrapper').click()
  //   cy.get('[data-value="e107c357-6dfe-4663-8756-2f0ce254d1a2"]').click()
  //   cy.get('.container.mb-3 > .custom-multi-select > .multi-select-wrapper').click()
  //   cy.get('[data-value="18c11ac7-302b-46f8-88ad-079f53445298"]').click()
  //   cy.get('[name="prices[0][min_pax]"]').click()
  //   cy.get('[name="prices[0][min_pax]"]').type('1')
  //   cy.get('[name="prices[0][max_pax]"]').click()
  //   cy.get('[name="prices[0][max_pax]"]').type('4')
  //   cy.get('[name="prices[0][price_child_low_season]"]').click()
  //   cy.get('[name="prices[0][price_child_low_season]"]').type('2000')
  //   cy.get('[name="prices[0][price_adult_low_season]"]').click()
  //   cy.get('[name="prices[0][price_adult_low_season]"]').type("5000")
  //   cy.get('[name="prices[0][price_child_high_season]"]').click()
  //   cy.get('[name="prices[0][price_child_high_season]"]').type('11000')
  //   cy.get('[name="prices[0][price_adult_high_season]"]').click()
  //   cy.get('[name="prices[0][price_adult_high_season]"]').type('12000')
  //   cy.get('#additionalDropdown').click()
  //   cy.get('.additional-item-row > .col-lg-8 > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
  //   cy.get('[name="additional_services[0][additional_price]"]').click()
  //   cy.get('[name="additional_services[0][additional_price]"]').type('100000')
  //   cy.get('[name="itineraries[0][itinerary_description]"]').click()
  //   cy.get('[name="itineraries[0][itinerary_description]"]').type('oke')
  //   cy.get('[name="itineraries[0][pickup_location]"]').click()
  //   cy.get('[name="itineraries[0][pickup_location]"]').type('bojonegoro')
  //   cy.get('[name="itineraries[0][drop_location]"]').click()
  //   cy.get('[name="itineraries[0][drop_location]"]').type('malang')
  //   cy.get('#destinationDropdown').click()
  //   cy.get('.detail-itinerary > .col-lg-8 > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click()

  // // Isi CKEditor 5 
  //   cy.window().then((win) => {
  //       const ckEditorInstance = win.document
  //         .querySelector('.ck-restricted-editing_mode_standard')
  //         ?.ckeditorInstance;
  
  //       if (ckEditorInstance) {
  //         ckEditorInstance.setData('<p>view mountain lincing is butifull</p>');
  //       } else {
  //         throw new Error('CKEditor instance not found');
  //       }
  //     });



  //   //
    

    //gambar
    cy.get('input[type="file"]').eq(2).selectFile('cypress/fixtures/hma.jpeg', { force: true })

    //
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    cy.get(':nth-child(1) > :nth-child(9) > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()


    })
    })