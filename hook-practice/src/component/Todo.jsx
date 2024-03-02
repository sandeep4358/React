import React from "react";
import { ACTION_TD } from "./Hook03";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TD.TOGGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
