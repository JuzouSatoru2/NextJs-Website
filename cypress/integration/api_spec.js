describe("Test api routes", () => {
  it("Visits page /api", () => {
    cy.request("/api").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
