import "@testing-library/jest-dom";
import NavBar from "../NavBar";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import cartlogo from "../Assets/cart_icon.png";

test("should have TRENDYSHOP brand name", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const text = screen.getByText("TRENDYSHOP");
  expect(text).toBeInTheDocument();
});

test("should have six links", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const links = screen.getAllByRole("link");
  expect(links.length).toBe(6);
});

test("should have a Shop link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const shopLink = screen.getByRole("link", { name: "Shop" });
  expect(shopLink).toBeInTheDocument();
});

test("should have a Men link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const menLink = screen.getByRole("link", { name: "Men" });
  expect(menLink).toBeInTheDocument();
});

test("should have a Women link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const womenLink = screen.getByRole("link", { name: "Women" });
  expect(womenLink).toBeInTheDocument();
});

test("should have a Kids link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const kidsLinks = screen.getByRole("link", { name: "Kids" });
  expect(kidsLinks).toBeInTheDocument();
});

test("should have a Login link", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const loginlink = screen.getByRole("link", { name: "Login" });
  expect(loginlink).toBeInTheDocument();
});

test("should have two images (brand-image & cart-image) ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );
  const allImages = screen.getAllByRole("img");
  expect(allImages.length).toBe(2);
});
