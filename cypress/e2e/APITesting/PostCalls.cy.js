describe("Post Call Suite", () => {

  it("Approach1 -Hard coded json object", () => {
    const responseBody = {
          tourist_name: "John",
          tourist_email: "test@example.com",
          tourist_location: "Paris"
        }

      cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/Tourist",
        body: responseBody
      })
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq(responseBody.tourist_name)
        expect(response.body.tourist_email).to.eq(responseBody.tourist_email)
        expect(response.body.tourist_location).to.eq(responseBody.tourist_location);
      })
  })

  it("Approach2 -Hard coded json object", () => {
    const responseBody = {
          tourist_name: Math.random().toString(5).substring(2),
          tourist_email: Math.random().toString(5).substring(2)+"@gmail.com",
          tourist_location: "London"
        }

      cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/Tourist",
        body: responseBody
      })
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq(responseBody.tourist_name)
        expect(response.body.tourist_email).to.eq(responseBody.tourist_email)
        expect(response.body.tourist_location).to.eq(responseBody.tourist_location);
      })
  })

})