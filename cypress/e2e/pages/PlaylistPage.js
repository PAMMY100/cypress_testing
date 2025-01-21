class PlaylistPage {

  elements = {

    playlistTitle: () => cy.get('#title > h1 > yt-formatted-string')
  }

}


module.exports = new PlaylistPage()