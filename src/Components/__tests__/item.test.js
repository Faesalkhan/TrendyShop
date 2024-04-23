import "@testing-library/jest-dom";
import Item from "../Item";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockData from "../mocks/mockProductData.json";

test("should render Item correctly", () => {
  render(
    <BrowserRouter>
      <Item item={mockData} />
    </BrowserRouter>
  );
  const name = screen.getByText(mockData.name);
  const newPrice = screen.getByText(`$ ${mockData.new_price}`);
  const oldPrice = screen.getByText(`$ ${mockData.old_price}`);

  expect(name).toBeInTheDocument();
  expect(newPrice).toBeInTheDocument();
  expect(oldPrice).toBeInTheDocument();
});

test("should render link correctly", () => {
  render(
    <BrowserRouter>
      <Item item={mockData} />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", `/product/${mockData.id}`);
});
