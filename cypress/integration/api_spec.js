describe('Test api routes', () => {
    it('Visits page /api', () => {
      cy.request('http://localhost:3000/api')
      .then((response) => {
        expect(response.body).contains('Api routes working')
     })
    })
  })