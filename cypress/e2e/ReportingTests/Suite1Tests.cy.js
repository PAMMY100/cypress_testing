describe("Suite1 Tests", () => {

  it("test 1", () => {
    
    cy.visit('https://www.google.com/search?q=javascript+by+tester+talk')

    cy.xpath('//*[@class="gLFyf"]').clear()

    cy.xpath('//*[@class="gLFyf"]').type('Javascript by testers talk')

  })

  it("test 2", () => {
    
    cy.visit('https://www.google.com/search?q=javascript+by+tester+talk')

    cy.xpath('//*[@class="gLFyf"]').clear()

    cy.xpath('//*[@class="gLFyf"]').type('Javascript by testers talk')

  })
})