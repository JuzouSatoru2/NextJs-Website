describe("Test admin page auth", () => {
  it("Visits page /admin (Should give 404)", () => {
    cy.visit("/admin", { failOnStatusCode: false });
    cy.get("h1").contains("404");
  });
});
