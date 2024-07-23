/// <reference types="cypress" />

context('Map view', () => {

  it('filters and markers', () => {
    cy.clearAllCookies()

    cy.visit('http://localhost:3000/map-view')

    cy.get('#filters').children('h3').contains('start your search')

    const filters = cy.get('#filters').children('div').children('form')

    filters.each((item) => {
      cy.wrap(item).find('label').should('have.length', 1)
      cy.wrap(item).find('select').should('have.length', 1)
    });

    // checking markers in place
    cy.wait(300)
    cy.get('#mapClipPath div').eq(2).children('div').as('markersContainer')
    cy.wait(300)

    cy.get('img[src="https://maps.gstatic.com/mapfiles/transparent.png"]').should('have.length', 5)

    // testing filters

    filters.first().children('select').select('£300000')

    cy.get('img[src="https://maps.gstatic.com/mapfiles/transparent.png"]').should('have.length', 3)

    // // check marker window

    cy.get('img[src="https://maps.gstatic.com/mapfiles/transparent.png"]').first().click()

    cy.get('.infoWindow').children([0]).children('img').should('have.length', 1)
    cy.get('.infoWindow').children([0]).children('p').should('have.length', 2)
  
    const infoRoomTypes = cy.get('.infoRoomTypes').children()

    infoRoomTypes.each((item) => {
      cy.wrap(item).find('svg').should('have.length', 1)
      cy.wrap(item).find('p').should('have.length', 1)
    });

    cy.get('.infoWindowBtnsContainer').children('a').should('have.length', 1)
    cy.get('.infoWindowBtnsContainer').children('button').should('have.length', 1)
  
  })
})
