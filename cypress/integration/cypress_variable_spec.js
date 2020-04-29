/// <reference types="cypress" />
describe('fruits', function() {
  beforeEach(function() {
      cy.fruit('apple').then( name => { this.fName = name})
      cy.log(this.fName)
  })

  it.only('print fruit name', function() {
      cy.log(this.fName)
  })
})
