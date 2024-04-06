import "@testing-library/jest-dom";
import Popular from "../Popular";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("renders Popular component correctly", () => {
  render(
    <BrowserRouter>
      <Popular />
    </BrowserRouter>
  );
  const popularTitle = screen.getByRole("heading", {
    name: "POPULAR IN WOMEN",
  });
  expect(popularTitle).toBeInTheDocument();
});

test("should render 4 items correctly", () => {
  render(
    <BrowserRouter>
      <Popular />
    </BrowserRouter>
  );
  const totalLinks = document.querySelectorAll(".popular-row .item");
  expect(totalLinks.length).toBe(4);
});
