describe('Test debug page', () => {
    it('Visits page /debug', () => {
      cy.visit('http://localhost:3000/debug', {failOnStatusCode: false})
      cy.get('h1').contains('404')
    })
  })