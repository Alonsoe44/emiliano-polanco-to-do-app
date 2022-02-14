import { loadToDoTasksAction } from "./actionsCreator";
import actionTypes from "./actionTypes";

describe("Given a loadToDoTasksAction function", () => {
  describe("When it receives an array with tasks 'clean my bed' and 'do the laundry'", () => {
    test("Then it should return an action with the tasks 'clean my bed' and 'do the laundry'", () => {
      const tasks = [
        {
          toDoTask: "clean my bed",
          id: "1",
        },
        {
          toDoTask: "do the laundry",
          id: "2",
        },
      ];
      const expectedAction = {
        type: actionTypes.loadToDoTasks,
        tasks,
      };

      const loadAction = loadToDoTasksAction(tasks);

      expect(loadAction).toEqual(expectedAction);
    });
  });
});
