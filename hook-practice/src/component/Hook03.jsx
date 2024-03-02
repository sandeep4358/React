/**
 * UseReducer hook
 * https://www.youtube.com/watch?v=kK_Wqx3RnHk */

import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTION_TD = {
  ADD_TODO: "addToDo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "deleteToDo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION_TD.ADD_TODO: {
      return [...todos, newTodo(action.payload.name)];
    }
    case ACTION_TD.TOGGLE_TODO: {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    }
    case ACTION_TD.DELETE_TODO:
      return todos.filter((todo) => {
        todo.id != action.payload.id;
      });

    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

const Hook03 = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState();

  function handleSubmit(e) {
    console.log("target--------->", e.target[0].value);
    e.preventDefault();
    dispatch({ type: ACTION_TD.ADD_TODO, payload: { name: name } });
    console.log("%%%%%%%%%%%%%%%>>>", name);
    setName("");
  }
  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          {...todos.map((todo) => {
            return <Todo todo={todo} dispatch={dispatch} />;
          })}
        />
      </form>
    </div>
  );
};

export default Hook03;
