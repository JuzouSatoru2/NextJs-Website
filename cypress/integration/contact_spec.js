describe('Test contact page', () => {
    it('Visits page /contact', () => {
      cy.visit('http://localhost:3000/contact')
      cy.get('nav')
      cy.get('footer')
    })
  })