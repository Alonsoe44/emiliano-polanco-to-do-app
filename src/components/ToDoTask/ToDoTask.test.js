import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoTask from "./ToDoTask";

describe("Given a ToDoTask component", () => {
  describe("When it's rendered with id '1' and text 'go to the moon'", () => {
    test("Then it should render with the text 'go to the moon'", () => {
      const expectedText = "I wanna go to the moon";
      const taskData = {
        text: "I wanna go to the moon",
        done: false,
        id: 1,
      };

      render(<ToDoTask task={taskData} />);

      const foundElement = screen.getByLabelText(expectedText);

      expect(foundElement).toBeInTheDocument();
    });
  });
  describe("When it's clicked", () => {
    test("Then it should call the actionOnClick", () => {
      const actionOnClick = jest.fn();
      const taskData = {
        text: "I wanna go to the moon",
        done: false,
        id: 1,
      };
      render(<ToDoTask task={taskData} userChange={actionOnClick} />);

      const foundElement = screen.getByRole("checkbox", {
        name: taskData.text,
      });

      userEvent.click(foundElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
