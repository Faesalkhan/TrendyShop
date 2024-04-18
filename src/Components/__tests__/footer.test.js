import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

test("should have TRENDYSHOP in it", () => {
  render(<Footer />);
  const text = screen.getByText("TRENDYSHOP");
  expect(text).toBeInTheDocument();
});

test("should have 4 imges", () => {
  render(<Footer />);
  const allImgs = screen.getAllByRole("img");
  expect(allImgs.length).toBe(4);
});

test("should have Copyright @2024 - All Rights Reserved", () => {
  render(<Footer />);
  const text = screen.getByText("Copyright @2024 - All Rights Reserved");
  expect(text).toBeInTheDocument();
});

test("should have links", () => {
  render(<Footer />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems.length).toBe(5);
});
