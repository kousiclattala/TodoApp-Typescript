import React, { useState } from "react";
import { useAppDispatch } from "../features/store/hooks";

import { nanoid } from "nanoid";

import { addTodo } from "../features/slices/todoSlicer";

const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (title === "") {
      return alert("Input Should not be Empty");
    }

    const setTodo = {
      id: nanoid(),
      title,
    };

    dispatch(addTodo(setTodo));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Todo"
        />
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default Todo;
