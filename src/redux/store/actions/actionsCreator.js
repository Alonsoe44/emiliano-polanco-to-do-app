import actionTypes from "./actionTypes";

export const loadToDoTasksAction = (tasks) => ({
  type: actionTypes.loadToDoTasks,
  tasks,
});

export const updateTaskCheckAction = (id) => ({
  type: actionTypes.updateTaskCheck,
  id,
});

export const addTaskAction = (task) => ({
  type: actionTypes.addTaskToList,
  task,
});

export const deleteDoneTasksAction = () => ({
  type: actionTypes.deleteDoneTasks,
});
