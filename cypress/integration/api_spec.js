describe("Test api routes", () => {
  it("Visits page /api", () => {
    cy.request("/api").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("Checks auth of /api/msg", () => {
    cy.request("/api/msg", { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(403);
    });
    cy.request("/api/msg/value", { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });
  it("Checks auth for /monitor", () => {
    cy.request("/api/monitor", { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });
});
