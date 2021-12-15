describe("Search", () => {
  it("should search and show related products", () => {
    cy.visit("localhost:3000");

    const searchText1 = "alcatel";
    const searchText2 = "liquid";
    const searchText3 = "no sense text";

    // testing typing a brand
    cy.wait(2000);
    cy.get("input")
      .should("have.attr", "placeholder", "Search...")
      .type(`${searchText1}`);
    cy.wait(2000);
    cy.get("p.product-brand").should("have.text", searchText1);

    // reset
    cy.get("input.search-input").clear();
    cy.wait(1000);

    // testing typing part of a model
    cy.get("input.search-input").type(searchText2);
    cy.wait(2000);
    cy.get("p.product-model")
      .contains(searchText2, { matchCase: false })
      .its("length")
      .should("be.gt", 0);

    // reset
    cy.get("input.search-input").clear();
    cy.wait(1000);

    // testing typing a no sense text in order to get no products
    cy.get("input.search-input").type(searchText3);
    cy.wait(2000);
    cy.get("div.no-products")
      .contains("There are no products to show!", { matchCase: false })
      .its("length")
      .should("be.eq", 1);
  });
});
