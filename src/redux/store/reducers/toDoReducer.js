import actionTypes from "../actions/actionTypes";
const toDoReducer = (taskLists = [], action = {}) => {
  let newTasksList;
  switch (action.type) {
    case actionTypes.loadToDoTasks:
      newTasksList = [...action.tasks];
      console.log(newTasksList);
      break;
    case actionTypes.addTaskToList:
      newTasksList = [action.task, ...taskLists];
      break;
    case actionTypes.deleteDoneTasks:
      newTasksList = taskLists.filter((task) => !task.done);

      break;
    case actionTypes.updateTaskCheck:
      newTasksList = taskLists.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
      break;
    default:
      newTasksList = [...taskLists];
      break;
  }

  return newTasksList;
};

export default toDoReducer;
