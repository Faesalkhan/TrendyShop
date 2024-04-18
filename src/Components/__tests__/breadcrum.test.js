import "@testing-library/jest-dom";
import Breadcrum from "../Breadcrum";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockProductData from "../mocks/mockProductData.json";

test("should have Home link", () => {
  render(
    <BrowserRouter>
      <Breadcrum product={mockProductData} />
    </BrowserRouter>
  );
  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toBeInTheDocument();
});

test("should have Shop link", () => {
  render(
    <BrowserRouter>
      <Breadcrum product={mockProductData} />
    </BrowserRouter>
  );
  const shopLink = screen.getByRole("link", { name: "Shop" });
  expect(shopLink).toBeInTheDocument();
});
