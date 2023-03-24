import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo; onDeleteTodo: () => void }> = (
  props
) => {
  return (
    <li
      key={props.todo.id}
      className={classes.item}
      onClick={props.onDeleteTodo}
    >
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
