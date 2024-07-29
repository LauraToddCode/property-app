/// <reference types="cypress" />

context('Saving', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/property-app')
  })

  it('save a property, then delete it', () => {

    cy.get('#headerSaved').contains('Saved Properties (0)')    

    cy.get('.saveBtn').first().click()

    cy.get('#headerSaved').contains('Saved Properties (1)')

    cy.get('#headerSaved').click()

    cy.location('pathname').should('include', 'saved')

    cy.get('#savedContainer').children('.listViewCardCont').should('have.length', 1)

    cy.get('.deleteBtn').click()

    cy.get('#headerSaved').contains('Saved Properties (0)')    

    cy.get('#savedContainer').children('.listViewCardCont').should('have.length', 0)

  })

})
