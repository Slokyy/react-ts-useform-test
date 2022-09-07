import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("increment counter", () => {
  render(<Counter />);

  // Select elements you want to interact with

  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");

  // Interact with those elements
  fireEvent.click(incrementBtn);

  // assert the expected result
  expect(counter).toHaveTextContent("1");
});
