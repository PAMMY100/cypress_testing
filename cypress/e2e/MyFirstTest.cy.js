describe('Test Suite 1', () => {
  it('My First Test', () => {
    cy.visit('https://www.youtube.com')

    // cy.get('input[name="search_query"]').select('')

    cy.get('.ytSearchboxComponentInput').type('javascript by testers talk');

    cy.get('.ytSearchboxComponentSearchButton > yt-icon ').click();

    

  })

  it('Test 2', () => {
    cy.log('Test Started')
    cy.visit('https://www.youtube.com');
    cy.log('Navigated to youtube');

    // cy.get('input[name="search_query"]').select('')

    cy.get('.ytSearchboxComponentInput').type('javascript by testers talk');

    cy.get('.ytSearchboxComponentSearchButton > yt-icon ').click();
    cy.log('Test completed successfully');
  })
})