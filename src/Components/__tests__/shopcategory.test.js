import "@testing-library/jest-dom";
import ShopCategory from "../ShopCategory";
import {
  fireEvent,
  getByAltText,
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const bannerImg = "example.png";
const category = "men";

test("should render ShopCategory correctly", () => {
  render(
    <BrowserRouter>
      <ShopCategory banner={bannerImg} category={category} />
    </BrowserRouter>
  );
  const bannerImage = screen.getByAltText("category-banner.png");
  const showingText = screen.getByText("Showing 1-12");

  expect(bannerImage).toBeInTheDocument();
  expect(showingText).toBeInTheDocument();
});

test("should handles sorting correctly", () => {
  render(
    <BrowserRouter>
      <ShopCategory banner={bannerImg} category={category} />
    </BrowserRouter>
  );
  const lowToHign = screen.getByText("low to high⬇️");
  const HignToLow = screen.getByText("high to low⬇️");
  expect(lowToHign).toBeInTheDocument();
  expect(HignToLow).toBeInTheDocument();

  fireEvent.click(lowToHign);
  const productsAfterLowToHigh = document.querySelectorAll(".shop-row .item");
  expect(productsAfterLowToHigh.length).toBe(12);

  fireEvent.click(HignToLow);
  const productsAfterHignToLow = document.querySelectorAll(".shop-row .item");
  expect(productsAfterHignToLow.length).toBe(12);
});
