describe("API Testing", () => {

  it("Passing Query parameters", () => {

    cy.request({
      method : "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
      qs: { postId: 1 }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).has.length(5);
      expect(response.body[1]).have.property('id', 2)
      expect(response.body[0]).has.property("email", "Eliseo@gardner.biz")
    })

  })

})