import ToDoTask from "../ToDoTask/ToDoTask";

const TaskList = ({ tasks, checkChange }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDoTask key={task.id} task={task} userChange={checkChange} />
      ))}
    </ul>
  );
};

export default TaskList;
