describe('Record and Play Suite', () => {
  it('Test1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.youtube.com');
    cy.get('.ytSearchboxComponentInput').clear();
    cy.get('.ytSearchboxComponentInput').type('testers talk{enter}');
    cy.get('#channel-title > #container > #text-container > #text').click();
    cy.get('#c4-player > .ytp-chrome-bottom > .ytp-chrome-controls > .ytp-left-controls > .ytp-play-button').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('javaScriptByTestersTalk', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get('.ytSearchboxComponentInput').clear();
    cy.get('.ytSearchboxComponentInput').type('javascript by testers talk');
    /* ==== End Cypress Studio ==== */
  });
})