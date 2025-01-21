class Homepage {

  elements = {

    searchTextbox: () => cy.get('.ytSearchboxComponentInput '),
    searchIcon: () => cy.get('button[class="ytSearchboxComponentSearchButton"] > yt-icon')
  }

  visit() {
    cy.visit('https://www.youtube.com/')
  }
  searchInYoutube() {
    this.elements.searchTextbox().type('Api Testing by Testers Talk');
    this.elements.searchIcon().click();
  }

}


module.exports = new Homepage()