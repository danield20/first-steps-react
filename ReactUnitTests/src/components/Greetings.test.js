import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greeting component", () => {
  test("renders Hello world", () => {
    //Arrange
    render(<Greetings />);
    //Act
    // nothing

    //Assert
    const helloWoldElement = screen.getByText("Hello world!");
    expect(helloWoldElement).toBeInTheDocument();
  });

  test("button is not clicked", () => {
    //Arrange
    render(<Greetings />);
    //Act
    // nothing

    //Assert
    const happyElement = screen.getByText("Happy to see you");
    expect(happyElement).toBeInTheDocument();
  });

  test("button is clicked", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const happyElement = screen.getByText("Changed");
    expect(happyElement).toBeInTheDocument();
  });

  test("correct text when is clicked", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const happyElement = screen.queryByText("to see you", { exact: false });
    expect(happyElement).toBeNull();
  });
});
