describe("Web site availability", () => {
  after(() => {
    cy.contains("Delete").click({ force: true });
  });
  it("Sanity listings web site", () => {
    cy.visit("http://192.168.35.21:3000");
    cy.contains("Create Record").should("exist");
  });
  it("Test Adding Employee listings", () => {
    cy.visit("http://192.168.35.21:3000/create");
    cy.get("#name").type("Employee1");
    cy.get("#position").type("Position1");
    cy.get("#positionIntern").click({ force: true });
    cy.contains("Create person").click({ force: true });
    cy.visit("http://192.168.35.21:3000");
    cy.contains("Employee1").should("exist");
  });
});
