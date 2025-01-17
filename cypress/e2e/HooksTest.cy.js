describe("Hooks Test Suite", () => {

  before('Running Before All Test', () => {
    cy.log('Running before all test!')
  })

  after('Running After All Test', () => {
    cy.log('Running after all test!')
  })

  beforeEach ("Running Before each test", () => {
    cy.log("running before each test!");
    cy.visit('https://www.nairaland.com/search?q=love&search=Search')

  })

  afterEach("Running after each test", () => {
    cy.log("running after each test!");
  })

  it("Hook Test 1", () => {
    
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