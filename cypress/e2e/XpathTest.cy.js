describe('Cypress Xpath Suite', () => {

  it('Cypress Xpath Test', () => {

   cy.visit('https://www.nairaland.com/search?q=sex&search=Search')


    cy.xpath('//*[@type="text"]').clear()

    // cy.xpath('//*[@type="text"]').type("crime")

    // cy.xpath('//*[text()="Youtube"]').click()
    
  })

})