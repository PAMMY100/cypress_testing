describe("API Testing", () => {

  let accessToken;

  before("Creating access token", () => {
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/api-clients",
      headers: { 'Content-Type': 'application/json' },
      body: {
        clientName: 'Random',
        clientEmail: Math.random().toString(5).substring(2)+"@gmail.com"
      }
    }).then((response) => {
      accessToken = response.body.accessToken;
    })
  })

  before("Creating new order", () => {
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/orders/",
      headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
           },
      body: {
        bookId: 2,
        customerName: Math.random().toString(5).substring(2)
      }
    }).then((response) => {
      expect(response.status).equal(201)
      expect(response.body.created).to.have.value(true)
    })
  })

})