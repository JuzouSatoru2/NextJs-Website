describe('Test index page', () => {
    it('Visits page /', () => {
      cy.visit('/')
      cy.get('nav')
      cy.get('footer')
    })
    it('Scroll effect', () => {
      cy.get('#scroll').click()
    })
  })