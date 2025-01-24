import homePage from './pages/HomePage'
import resultPage from './pages/ResultPage'
import playlistPage from './pages/PlaylistPage'

describe("Page Object", () => {

  it("Page Object test1", () => {

    //Open youtube
    homePage.visit()

    //Search in youtube
    homePage.searchInYoutube()
    //Go to playlist
    resultPage.goToPlaylist()

    //Validate playlist title
    playlistPage.elements.playlistTitle().should('have.text', 'API Testing Postman Tutorial Full Course 2024')
  })

})