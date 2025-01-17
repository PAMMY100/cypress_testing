import 'cypress-iframe'

describe("Iframe Test Suits", () => {

  it("Iframe Test", () => {

    cy.visit('./iframesdemo.html');

    cy.frameLoaded('#buttonframe') //frame name

    cy.iframe().get('button[class="navbar-toggler"]').click();
  })
})