import {
  addTaskAction,
  deleteDoneTasksAction,
  loadToDoTasksAction,
  updateTaskCheckAction,
} from "../store/actions/actionsCreator";

const apiUrl = process.env.REACT_APP_LOCALAPI;

export const loadToDoTasksThunk = async (dispatch) => {
  const response = await fetch(apiUrl);
  const tasks = await response.json();
  dispatch(loadToDoTasksAction(tasks));
};

export const addTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  dispatch(addTaskAction(newTask));
};

export const updateTaskCheckThunk = (task) => async (dispatch) => {
  console.log(`${apiUrl}${task.id}`);
  const response = await fetch(`${apiUrl}${task.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ done: task.done }),
  });

  dispatch(updateTaskCheckAction(task.id));
};

export const deleteDoneTasksThunk = (ids) => async (dispatch) => {
  const deletedPetitions = ids.map((id) =>
    fetch(`${apiUrl}${id}`, {
      method: "DELETE",
    })
  );

  Promise.all(deletedPetitions).then(dispatch(deleteDoneTasksAction()));
};
