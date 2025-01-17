describe("Assertion tests", () => {

  it("first test", () => {

    cy.visit('https://www.google.com/search?q=javascript+by+tester+talk')

    cy.get('textarea[name="q"]').then((element) => {
      expect(element.text()).to.equal('javascript by tester talk')
    })

    cy.get('textarea[name="q"]').should("have.text", "javascript by tester talk")

    cy.get('textarea[name="q"]').should("contain", "javascript by tester talk")

    cy.get('textarea[name="q"]').should("be.visible")

    cy.get('textarea[name="q"]').should("have.html", "javascript by tester talk").and("have.attr", "value")

    cy.get('textarea[name="q"]').should("have.html", "javascript by tester talk").and("have.attr", "value").and("include", "javascript by tester talk")

    cy.get('textarea[name="q"]').then((element) => {
      expect(element.text()).to.have.length(25);
    })

  })

})