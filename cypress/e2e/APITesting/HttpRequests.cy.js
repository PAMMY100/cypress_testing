describe("HTTP Request Suit", () => {

  //GET request
  it("GET Call", () => {
    cy.request('GET', "https://restful-booker.herokuapp.com/booking")
    .its("status")
    .should("equal", 200)
  })

  //POST request
  it("Post Call", () => {
    cy.request({
        method: 'POST',
        url: "https://restful-booker.herokuapp.com/booking",
        body: {
              firstname: "Api Testing",
              lastname: "tutorial",
              totalprice: 1000,
              depositpaid: true,
              bookingdates: {
                  checkin: "2018-01-01",
                  checkout: "2019-01-01"
              },
              additionalneeds: "super bowls"
           }
        })
        .its('status')
        .should('equal', 200)
      })

      //PUT request
      it("Put Calls", () => {

        cy.request({
          method: 'PUT',
          url: "https://restful-booker.herokuapp.com/booking/3490",
          body: {
            firstname: "Javascript",
              lastname: "tutorial",
              totalprice: 1000,
              depositpaid: true,
              bookingdates: {
                  checkin: "2018-01-01",
                  checkout: "2019-01-01"
              },
              additionalneeds: "super bowls"
          }
        })
        .its("status")
        .should("equal", 403)

      })
})