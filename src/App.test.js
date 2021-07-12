import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

test("renders header && corect start page", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText("Wybierz ilość miejsc")).toBeInTheDocument();
});

it("renders input with default value", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByDisplayValue("1")).toBeInTheDocument();
});

it("renders checkox ", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(
    screen.getByText("Czy miejsca mają być obok siebie?")
  ).toBeInTheDocument();
});
it("renders submit button", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText("Wybierz miejsca")).toBeInTheDocument();
});
