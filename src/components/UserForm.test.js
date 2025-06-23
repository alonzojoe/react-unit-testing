import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  //render the component
  render(<UserForm />);
  //manipulate the component input

  const input = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //assertion - make sure component doing
  expect(input).toHaveLength(2);
  expect(button).toBeInTheDocument();
  //what we expect to do
});
