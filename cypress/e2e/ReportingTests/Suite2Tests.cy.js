describe("Suite2 Tests", () => {

  it("test 1", () => {
    
    cy.visit('https://www.google.com/search?q=javascript+by+tester+talk')

    cy.get('textarea[name="q"]').clear()

    cy.get('textarea[name="q"]').type('Javascript by testers talk')

  })
})