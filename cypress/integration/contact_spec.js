describe('Test contact page', () => {
    it('Visits page /contact', () => {
      cy.visit('/contact')
      cy.get('nav')
      cy.get('footer')
    })
  })