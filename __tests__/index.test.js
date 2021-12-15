import React from "react";
import { render, screen } from "../utils/testUtil";
import Home from "../pages/index";

describe("Homepage", () => {
  it("renders the products heading", () => {
    render(<Home />);

    const productsHeading = screen.getByText("Products");
    expect(productsHeading).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<Home />);

    const searchInput = screen.getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();
  });

  it("renders the placeholders initially", () => {
    render(<Home />);

    const placeholders = screen.getAllByTestId("placeholder-product");
    expect(placeholders).toBeTruthy();
  });
});
