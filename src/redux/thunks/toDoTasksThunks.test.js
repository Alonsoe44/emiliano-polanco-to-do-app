import { deleteDoneTasksThunk } from "./toDoTasksThunks";

describe("Given a deleteDoneTasksThunk inner function", () => {
  describe("When it is called", () => {
    test("Then it should return the new state without the task", async () => {
      const dispatch = jest.fn();

      const thunkFunction = deleteDoneTasksThunk([1, 2, 3]);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
