/// <reference types="cypress" />
describe('fruits', function() {
  beforeEach(function() {
      cy.fruit('apple').then( name => { fName = name})
      cy.log(fName)
  })

  it.only('print fruit name', function() {
      cy.log(fName)
  })
})
