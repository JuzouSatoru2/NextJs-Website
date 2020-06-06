describe("Test software page", () => {
  it("Visits page /software", () => {
    cy.visit("/software");
    cy.get("nav");
    cy.get("footer");
  });
  it("Get this repos information", () => {
    cy.get(".rt-td").find("a").contains("NextJs-Website");
  });
});
