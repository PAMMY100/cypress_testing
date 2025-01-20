describe('Data Driven Test Suite', () => {

  it('Data Driven Test1', () => {
    
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

    cy.get('textarea[name="q"]').clear()

    cy.get('textarea[name="q"]').type('api testing by testers talk')

    cy.get('button[class="HZVG1b Tg7LZd"]').click()

  })
})