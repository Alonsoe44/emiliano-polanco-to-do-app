import propTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskThunk } from "../../redux/thunks/toDoTasksThunks";

const TaskForm = () => {
  const [newTaskText, changeTextValue] = useState("");

  const dispatch = useDispatch();

  const createTask = (task) => {
    dispatch(addTaskThunk(task));
  };

  return (
    <fieldset>
      <legend>Enter your new task</legend>
      <label htmlFor="I want">I am going to ... </label>
      <input
        id="I want"
        type="textInput"
        name="Task input"
        placeholder="go to the moon"
        value={newTaskText}
        onChange={(e) => changeTextValue(e.target.value)} // change when user typing
        onKeyUp={(e) => {
          if (e.key === "Enter" && newTaskText.length) {
            createTask({ text: newTaskText, done: false });
            changeTextValue(""); // refresh the placeholder
          }
        }}
      ></input>
    </fieldset>
  );
};

TaskForm.propTypes = {
  createWish: propTypes.func,
};

TaskForm.defaultProps = {
  createWish: () => {},
};

export default TaskForm;
