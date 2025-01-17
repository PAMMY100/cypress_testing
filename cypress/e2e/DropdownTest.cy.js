describe("Dropdwon test suite", () => {

  it("dropdown test", () => {

    cy.visit("https://example.cypress.io/commands/actions")


    // cy.get('.action-select').select(2) //index

    // cy.get('.action-select').select('bananas') //visible text

    cy.get('.action-select').select('fr-oranges') //value


  })
})