describe("Test api routes", () => {
  it("Visits page /api", () => {
    cy.request("/api").then((response) => {
      expect(response.body).contains("Api routes working");
    });
  });
});
