const jsonData = require('../fixtures/datadriventest2.json')
describe('Data Driven Test Suite2', () => {

  jsonDat.forEach((testData) => {

    it('Data Driven Test2', () => {
    
      cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
  
      cy.get('textarea[name="q"]').clear()
  
      cy.get('textarea[name="q"]').type(testData.skill)
  
      cy.get('button[class="HZVG1b Tg7LZd"]').click()
  
    })
  });
  
})