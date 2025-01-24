describe("Post Call Suite", () => {

  it("Approach -Hard coded json object", () => {
    const responseBody = {
          firstname: "John",
          lastname: "Doe",
          age: 30
        }

      cy.request({
        method: "POST",
        url: "wwww.test.com",
        body: responseBody
      })
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.firstname).to.eq(responseBody.firstname)
        expect(response.body.lastname).to.eq(responseBody.lastname)
      })
  })

})