/// <reference types="cypress" />

context('List view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/property-app')
  })

  it('filters panel', () => {

    cy.get('#filters').children('h3').contains('start your search')

    const filters = cy.get('#filters').children('div').children('form')

    filters.each((item) => {
      cy.wrap(item).find('label').should('have.length', 1)
      cy.wrap(item).find('select').should('have.length', 1)
    });

    cy.get('.listViewCardCont').should('have.length', 5)

    filters.first().children('select').select('£300000')

    cy.get('.listViewCardCont').should('have.length', 3)
  })

})
