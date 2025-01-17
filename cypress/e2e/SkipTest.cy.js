describe("Skip Test Suite", () => {

  beforeEach ("Running Before each test", () => {
    cy.log("running before each test!");
    cy.visit('https://www.nairaland.com/search?q=love&search=Search')

  })

  it("Skip Test 1", () => {
    
    cy.get('input[name="q"]').eq(1).then((element) => {
      cy.log('Text from Nairaland 1: '+element.text())
    })

  })

  it("Hook Test 2", () => {

    cy.get('input[name="q"]').eq(1).then((element) => {
      cy.log('Text from Nairaland 2: '+element.text())
    })

  })
})