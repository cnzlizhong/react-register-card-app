import React from "react";
import { render, RenderOptions, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { AppContextProvider } from "./store/AppContext";

const renderWithAppContext = (ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>): RenderResult => {
    return render(<AppContextProvider>{ui}</AppContextProvider>, options);
};

test("renders a register card form", () => {
  renderWithAppContext(<App />);
  const registerCardForm = screen.getByRole('form', {  name: /register card/i});
  expect(registerCardForm).toBeVisible();
});

test("form submit button is disabled by default", () => {
  renderWithAppContext(<App />);
  const submitBtn = screen.getByRole('button', {  name: /submit/i});
  expect(submitBtn).toBeDisabled();
});

test("form submit button is enabled with valid entries", async () => {
  renderWithAppContext(<App />);
  userEvent.type(screen.getByRole('textbox', {  name: /credit card number/i}), "4242424242424242");
  userEvent.type(screen.getByRole('textbox', {  name: /cvc/i}), "123");
  userEvent.type(screen.getByRole('textbox', {  name: /expiry/i}), "1224");
  const submitBtn = await screen.findByRole('button', {  name: /submit/i});
  expect(submitBtn).toBeEnabled();
});

test("form submit button is disabled with invalid card number", async () => {
  renderWithAppContext(<App />);
  userEvent.type(screen.getByRole('textbox', {  name: /credit card number/i}), "123");
  userEvent.type(screen.getByRole('textbox', {  name: /cvc/i}), "123");
  userEvent.type(screen.getByRole('textbox', {  name: /expiry/i}), "1224");
  const submitBtn = await screen.findByRole('button', {  name: /submit/i});
  expect(submitBtn).toBeDisabled();
});

test("menu is in the document but invisible on app start", () => {
  renderWithAppContext(<App />);
  const menuContent = screen.getByRole('navigation');
  expect(menuContent).toBeInTheDocument();
  expect(menuContent).toHaveClass('opacity-0');
});

test("menu is visible when toggle menu on", async () => {
  renderWithAppContext(<App />);
  userEvent.click(screen.getByTestId('MenuIcon'));
  const menuContent = await screen.findByRole('navigation');
  expect(menuContent).toHaveClass('opacity-100');
});