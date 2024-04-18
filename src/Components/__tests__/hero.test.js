import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

test("should have BEST OF SEASON COLLECTION", () => {
  render(<Hero />);
  const text = screen.getByText("BEST OF SEASON COLLECTION");
  expect(text).toBeInTheDocument();
});
