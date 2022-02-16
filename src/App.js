import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TasksList/TaskList";
import {
  deleteDoneTasksThunk,
  loadToDoTasksThunk,
  updateTaskCheckThunk,
} from "./redux/thunks/toDoTasksThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDoTasksThunk);
  }, [dispatch]);

  const taskList = useSelector((state) => {
    return state.toDos;
  });

  const deleteOldChores = () => {
    const ids = taskList.filter((task) => !task.done).map((toDo) => toDo.id);
    dispatch(deleteDoneTasksThunk(ids));
  };

  const toggleCheck = (task) => {
    console.log(task);
    dispatch(updateTaskCheckThunk(task));
  };

  return (
    <div className="App">
      <h1>My to do List </h1>
      <TaskForm />
      <TaskList tasks={taskList} checkChange={toggleCheck} />
      <button onClick={deleteOldChores}>I did my chores</button>
    </div>
  );
}

export default App;
