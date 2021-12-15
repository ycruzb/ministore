describe("Search", () => {
  it("should search and show related products", () => {
    cy.visit("localhost:3000");
    const searchText = "alcatel";
    cy.wait(2000);
    cy.get("input")
      .should("have.attr", "placeholder", "Search...")
      .type(`${searchText}`);
    cy.wait(2000);
    cy.get("p.product-brand").should("have.text", searchText);
  });
});
