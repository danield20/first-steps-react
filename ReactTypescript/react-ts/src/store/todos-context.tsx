import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type Context = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<Context>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    setTodos((oldState) => {
      return oldState.concat(new Todo(text));
    });
  }

  function onDeleteTodo(id: string) {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  const contextValue: Context = {
    items: todos,
    addTodo: addTodo,
    removeTodo: onDeleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
