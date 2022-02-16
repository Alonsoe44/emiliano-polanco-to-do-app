import actionTypes from "../actions/actionTypes";
import toDoReducer from "./toDoReducer";

describe("Given a toDoReducer function", () => {
  describe("When it receives an array of objects tasks and a loadToDoAction", () => {
    test("Then it should return the new tasks of the action payload", () => {
      const currentTasks = [];

      const action = {
        type: actionTypes.loadToDoTasks,
        tasks: [
          {
            toDoTask: "clean my bed",
            id: "1",
          },
          {
            toDoTask: "do the laundry",
            id: "2",
          },
        ],
      };

      const expectedTasks = [
        {
          toDoTask: "clean my bed",
          id: "1",
        },
        {
          toDoTask: "do the laundry",
          id: "2",
        },
      ];

      const newTasks = toDoReducer(currentTasks, action);

      expect(newTasks).toEqual(expectedTasks);
    });
  });
  describe("When it receives 3 tasks and an updateTaskCheckAction with an id 2", () => {
    test("Then it should return 3 tasks with one with the check property toggled", () => {
      const currentTasks = [
        {
          text: "I wanna go to the moon",
          done: false,
          id: 1,
        },
        {
          text: "I wanna rob a bank",
          done: false,
          id: 2,
        },
        {
          text: "I wanna work in a project with James Bond",
          done: false,
          id: 3,
        },
      ];

      const action = {
        type: actionTypes.updateTaskCheck,
        id: 3,
      };

      const expectedTasks = [
        {
          text: "I wanna go to the moon",
          done: false,
          id: 1,
        },
        {
          text: "I wanna rob a bank",
          done: false,
          id: 2,
        },
        {
          text: "I wanna work in a project with James Bond",
          done: true,
          id: 3,
        },
      ];

      const newTasks = toDoReducer(currentTasks, action);

      expect(newTasks).toEqual(expectedTasks);
    });
  });
});
