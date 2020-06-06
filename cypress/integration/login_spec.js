describe("Test login page", () => {
  it("Visits page /login", () => {
    cy.visit("/login");
    cy.get("nav");
    cy.get("footer");
  });
  it("Check login auth", () => {
    cy.get("#staticEmail").type("value");
    cy.get("#staticName").type("value");
    cy.get("#staticPassword").type("value");
    cy.get(".btn").contains("Submit").click();
    cy.get(".alert-danger").should("be.visible");
  });
});
