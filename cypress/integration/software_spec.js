describe('Test software page', () => {
    it('Visits page /software', () => {
      cy.visit('http://localhost:3000/software')
      cy.get('nav')
      cy.get('footer')
    })
    it('Test number of table rows', () => {
      cy.get('.rt-tbody').find('.rt-tr-group').its('length').should('be.gte', 3)
    })
  })