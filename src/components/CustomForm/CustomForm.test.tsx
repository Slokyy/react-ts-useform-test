import {
  act,
  render,
  screen,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import CustomForm from "./CustomForm";

test("Check if form is rendering", () => {
  render(<CustomForm />);
  const firstName = screen.getByRole("textbox", {
    name: /first name/i,
  });
  expect(firstName).toBeInTheDocument();
});

test("Check if form is submitting successfully", async () => {
  render(<CustomForm />);

  const firstName = screen.getByRole("textbox", {
    name: /first name/i,
  });
  const lastName = screen.getByRole("textbox", {
    name: /last name/i,
  });
  const age = screen.getByRole("spinbutton", {
    name: /age/i,
  });

  const button = screen.getByRole("button", {
    name: /submit/i,
  });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.change(firstName, {
      target: { value: "Slobodan" },
    });

    fireEvent.change(lastName, {
      target: { value: "Cvetkovic" },
    });

    fireEvent.change(age, {
      target: { value: "19" },
    });

    await fireEvent.click(button);

    // render(<CustomForm />);
  });

  expect(screen.getByTestId("success")).toBeVisible();
});
