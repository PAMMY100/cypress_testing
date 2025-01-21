const { before } = require("cypress/types/lodash")

describe('Data Driven Test Suite', () => {

  let testData;

  before("Run Before All Test", () => {
    cy.fixture('datadriventesting1.json').then((jsonData) => {
        testData = jsonData;
    })
  })

  it('Data Driven Test1', () => {
    
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')

    cy.get('textarea[name="q"]').clear()

    cy.get('textarea[name="q"]').type(testData.skill)

    cy.get('button[class="HZVG1b Tg7LZd"]').click()

  })
})