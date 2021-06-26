import React from "react";

import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{ color: "blueviolet", fontSize: "3em", marginBottom: "2em" }}>
        Welcome Alien
      </p>

      <div>
        <Todo />
      </div>

      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
