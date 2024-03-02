// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   <App />
// );

import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  //  if (action.type === "INCREMENT") {
  //   return {
  //     counter: state.counter + 1,
  //   };
  // } else if (action.state === "DECREMENT") {
  //   return {
  //     counter: state.counter - 1,
  //   };
  // }

  const { payload = { count: 1 } } = action;
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + payload.count,
      };

    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "RESET":
      return {
        counter: 0,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "INCREMENT", payload: { count: 2 } });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });
