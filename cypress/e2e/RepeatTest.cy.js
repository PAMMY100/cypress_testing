describe("Repeat Test Suite", () => {

  beforeEach ("Running Before each test", () => {
    cy.log("running before each test!");
    cy.visit('https://www.nairaland.com/search?q=love&search=Search')

  })

  Cypress._.times(2, (k) => {

    it("Repeat Test 1", () => {
    
      cy.get('input[name="q"]').eq(1).then((element) => {
        cy.log('Text from Nairaland 1: '+element.text())
      })
  
    })

  })

})