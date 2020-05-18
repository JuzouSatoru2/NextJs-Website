describe('Test debug page', () => {
    it('Visits page /debug', () => {
      cy.visit('/debug', {failOnStatusCode: false})
      cy.get('h1').contains('404')
    })
  })