import actionTypes from "./actionTypes";

export const loadToDoTasksAction = (tasks) => ({
  type: actionTypes.loadToDoTasks,
  tasks,
});
