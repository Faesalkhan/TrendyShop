import "@testing-library/jest-dom";
import RealetedProducts from "../RelatedProducts";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("should renders RelatedProducts component correctly", () => {
  render(
    <BrowserRouter>
      <RealetedProducts />
    </BrowserRouter>
  );
  const heading = screen.getByRole("heading", { name: "RELATED PRODUCTS" });
  expect(heading).toBeInTheDocument();
});

test("should render 4 items correctly", () => {
  render(
    <BrowserRouter>
      <RealetedProducts />
    </BrowserRouter>
  );
  const totalLinks = document.querySelectorAll(".related-products-row .item");
  expect(totalLinks.length).toBe(4);
});
