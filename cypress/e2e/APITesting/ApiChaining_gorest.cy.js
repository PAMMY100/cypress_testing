/*
    POST https://gorest.co.in/public/v2/users
    PUt https://gorest.co.in/public/v2/users/${{userId}}
    DELETE https://gorest.co.in/public/v2/users/${userId}
*/

describe("Go rest API chaining", () => {
    const auth_token = "Bearer 433856d81035039d0f2da04be33707506f63845e7463e09e1ec110e3a049bcfb"

    it("create, update, delete user in Gorest API", () => {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'John Kennedy',
                email: Math.random().toString(5).substring(2)+"@gmail.com",
                gender: 'Male',
                status: 'active'
            },
            headers: {
                Authorization: auth_token
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            const userId = response.body.id
            //update user name
            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/'+userId,
                body: {
                    name: 'Scott'
                },
                headers: {
                    Authorization: auth_token
                }
            })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq('Scott')
                //delete request
                cy.request({
                    method: 'DELETE',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    headers: {
                        Authorization: auth_token
                    }
                }).then((response) => {
                    expect(response.status).to.eq(204)
                })
            })
        })
    })
})