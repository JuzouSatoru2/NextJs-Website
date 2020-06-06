describe("Pre render pages", () => {
  it("Visits page contact", () => {
    cy.visit("/contact", { failOnStatusCode: false });
  });
  it("Visits page admin", () => {
    cy.visit("/admin", { failOnStatusCode: false });
  });
  it("Visits page index", () => {
    cy.visit("/", { failOnStatusCode: false });
  });
  it("Visits page login", () => {
    cy.visit("/login", { failOnStatusCode: false });
  });
  it("Visits page software", () => {
    cy.visit("/software", { failOnStatusCode: false });
  });
});
