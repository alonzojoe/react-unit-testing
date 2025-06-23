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

test("it calls on onSubmit when the form is submitted", () => {
  const mock = jest.fn();

  //try render the component
  render(<UserForm onSubmit={mock} />);

  //find user inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  //Simulate typing name
  user.click(nameInput);
  user.keyboard("Joe");

  //Simulate typing email
  user.click(emailInput);
  user.keyboard("alonzojoe@gmail.com");

  const button = screen.getByRole("button");

  //Simulate submitting the form
  user.click(button);
  //assertion
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "Joe",
    email: "alonzojoe@gmail.com",
  });
});
