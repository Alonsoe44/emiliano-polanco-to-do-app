import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoTask from "./ToDoTask";

describe("Given a ToDoTask component", () => {
  describe("When it's rendered with id '1' and text 'go to the moon'", () => {
    test("Then it should render with the text 'go to the moon'", () => {
      const expectedText = "go to the moon";

      render(<ToDoTask id={1} text={expectedText} />);

      const foundElement = screen.getByLabelText(expectedText);

      expect(foundElement).toBeInTheDocument();
    });
  });
  describe("When it's clicked", () => {
    test("Then it should call the actionOnClick", () => {
      const actionOnClick = jest.fn();
      const taskText = "running";
      render(<ToDoTask id={1} text={taskText} userChange={actionOnClick} />);

      const foundElement = screen.getByRole("checkbox", { name: taskText });

      userEvent.click(foundElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
