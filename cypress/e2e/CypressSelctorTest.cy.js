describe("Cypress Selectors Suite", () => {

  it("Cypress Selectors Test", () => {
    cy.visit('https://www.youtube.com/@testerstalk')
    
    // cy.get('textarea[name="q"]').then((element) => {
    //   cy.log('Text from Google 1: '+ element.text())
    // })

    // cy.get("#APjFqb").then((element) => {
    //   cy.log('Text from Google 2: '+ element.text())
    // })

    // //first element
    // // cy.get("div[role='list'] > div[role='listitem']").first().click();

    // //index element
    // cy.get("div[role='list'] > div[role='listitem']").eq(1).click();

    // cy.get("button[type^='sub']").click()

    cy.get("yt-tab-shape").eq(1).click();

  })
})