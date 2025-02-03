//Pre-requisite: generate Auth code
//https:github.com/login/oauth/authorize/{client_id}
//https://github.com/login/oauth/authorize/client_id=Ov23lisLCiEvRpWHlrDI

/*1) Get the Oauth2 access token
 https:github.com/login/oauth/access_token

 Query params
    ----
    client_id
    client_secret
    code

    2) send GET request by using access token.
    https://api.github.com/user/repos
    Auth: accessToken
*/

describe("Oauth2 testing", () => {
    let accessToken = "";

    it("get Oath2 access token", () => {

        cy.request({
            method: 'POST',
            url: "https:github.com/login/oauth/access_token",
            qs: {
                client_id: 'Ov23lisLCiEvRpWHlrDI',
                client_secret: 'd490c8281da32b93a5140addbf5ab872daea186b',
                code: '9e800fb68a3a531ac647'
            }
        }).then((response) => {
           const params = response.body.split('&');
           cy.log("params : "+params)
            accessToken = params[0].split("=")[1]
            cy.log("Generated token is: "+accessToken)
        })
    })

    it('Oauth2 request', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer ' +accessToken
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(791748587)
        })
    })
})