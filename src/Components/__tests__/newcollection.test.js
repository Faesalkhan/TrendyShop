import "@testing-library/jest-dom";
import NewCollections from "../NewCollections";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("should renders NewCollections component correctly", () => {
  render(
    <BrowserRouter>
      <NewCollections />
    </BrowserRouter>
  );
  const heading = screen.getByRole("heading", { name: "NEW COLLECTIONS" });
  expect(heading).toBeInTheDocument();
});

test("should render 8 items correctly", () => {
  render(
    <BrowserRouter>
      <NewCollections />
    </BrowserRouter>
  );
  const totalLinks = document.querySelectorAll(".new-collection-row .item");
  expect(totalLinks.length).toBe(8);
});
