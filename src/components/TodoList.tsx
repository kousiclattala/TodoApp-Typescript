import React from "react";
import { selectTodo } from "../features/slices/todoSlicer";
import { useAppSelector } from "../features/store/hooks";

const TodoList = () => {
  const todos = useAppSelector(selectTodo);

  console.log("Todos", todos);

  return (
    <>
      {todos.todo.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
