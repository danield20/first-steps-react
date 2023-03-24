import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const useCtx = useContext(TodosContext);
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = todoTextInput.current!.value;

    if (todoText.trim() === "") return;

    useCtx.addTodo(todoText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="test" ref={todoTextInput}></input>
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
