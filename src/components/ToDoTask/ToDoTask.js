const ToDoTask = ({ task: { text, done, id }, userChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        name={text}
        checked={done}
        onChange={(e) => userChange({ text: text, done: e.target.checked, id })}
        id={text}
      />
      <label htmlFor={text}>{text}</label>
    </li>
  );
};

export default ToDoTask;
