import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Signup from "../Signup";

test("should have one button named Continue", () => {
  render(<Signup />);
  const btn = screen.getByRole("button", { name: "Continue" });
  expect(btn).toBeInTheDocument();
});

test("should have a login link", () => {
  render(<Signup />);
  const links = screen.getAllByRole("link", { name: "Login" });
  expect(links.length).toBe(1);
});

test("should have placeholder 'Your Email' of a input", () => {
  render(<Signup />);
  const inputEmail = screen.getByPlaceholderText("Your Email");
  expect(inputEmail).toBeInTheDocument();
});

test("should have placeholder 'Your Password' of a input", () => {
  render(<Signup />);
  const inputPassword = screen.getByPlaceholderText("Your Password");
  expect(inputPassword).toBeInTheDocument();
});

test("should have one checkbox", () => {
  render(<Signup />);
  const checkboxe = screen.getByRole("checkbox");
  expect(checkboxe).toBeInTheDocument();
});
