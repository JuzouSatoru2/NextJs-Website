describe('Test index page', () => {
    it('Visits page /', () => {
      cy.visit('http://localhost:3000/')
      cy.get('nav')
      cy.get('footer')
    })
    it('Scroll effect', () => {
      cy.get('#scroll').click()
    })
  })