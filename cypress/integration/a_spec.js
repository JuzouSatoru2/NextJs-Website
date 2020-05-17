describe('Pre render pages', () => {
    it('Visits page contact', () => {
      cy.visit('http://localhost:3000/contact', {failOnStatusCode: false})
    })
    it('Visits page debug', () => {
        cy.visit('http://localhost:3000/debug', {failOnStatusCode: false})
    })
    it('Visits page index', () => {
        cy.visit('http://localhost:3000/', {failOnStatusCode: false})
    })
    it('Visits page login', () => {
        cy.visit('http://localhost:3000/login', {failOnStatusCode: false})
    })
    it('Visits page software', () => {
        cy.visit('http://localhost:3000/software', {failOnStatusCode: false})
    })
})