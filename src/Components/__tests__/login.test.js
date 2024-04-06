import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "../Login";

test("should have one button named Continue", () => {
  render(<Login />);
  const btn = screen.getByRole("button", { name: "Continue" });
  expect(btn).toBeInTheDocument();
});

test("should have a sign up link", () => {
  render(<Login />);
  const links = screen.getAllByRole("link", { name: "Click here" });
  expect(links.length).toBe(1);
});

test("should have placeholder 'Email Address' of a input", () => {
  render(<Login />);
  const inputEmail = screen.getByPlaceholderText("Email Address");
  expect(inputEmail).toBeInTheDocument();
});

test("should have placeholder 'Password' of a input", () => {
  render(<Login />);
  const inputPassword = screen.getByPlaceholderText("Password");
  expect(inputPassword).toBeInTheDocument();
});

test("should have one checkbox", () => {
  render(<Login />);
  const checkboxe = screen.getByRole("checkbox");
  expect(checkboxe).toBeInTheDocument();
});
