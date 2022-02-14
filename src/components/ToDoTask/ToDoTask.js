import PropTypes from "prop-types";

const ToDoTask = ({ text, done, id, userChange }) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => userChange(e.target.checked)}
        id={text}
      />
      <label htmlFor={text}>{text}</label>
    </li>
  );
};

ToDoTask.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool,
  id: PropTypes.number.isRequired,
  userChange: PropTypes.func,
};

ToDoTask.defaultProps = {
  done: false,
  userChange: () => {},
};
export default ToDoTask;
