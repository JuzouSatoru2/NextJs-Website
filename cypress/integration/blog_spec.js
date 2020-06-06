describe("Test blog pages", () => {
  it("Visits page /blog", () => {
    cy.visit("/blog");
    cy.get("nav");
    cy.get("footer");
  });
  it("Visits page /blog/show/[slug]", () => {
    cy.visit("/blog/show/value");
    cy.get("nav");
    cy.get("footer");
  });
  it("Visits page /blog/new (Should give 404)", () => {
    cy.visit("/blog/new", { failOnStatusCode: false });
    cy.get("h1").contains("404");
  });
});
