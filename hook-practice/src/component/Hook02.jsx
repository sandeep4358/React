import { useReducer, useState } from "react";
export const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
const Hook002 = () => {
  function reducer(state, action) {
    switch (action) {
      case ACTION.INCREMENT: {
        return {
          count: state.count + 1,
        };
      }
      case ACTION.DECREMENT: {
        return {
          count: state.count - 1,
        };
      }
      default: {
        return state;
      }
    }
    return { count: state.count + 1 };
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch(ACTION.INCREMENT);
  };

  const decrement = () => {
    dispatch(ACTION.DECREMENT);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Hook002;
