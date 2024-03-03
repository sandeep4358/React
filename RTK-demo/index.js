store = require("./app/store");

const cakeActions = require("./features/cake/cakeSlice").cakeActions;

console.log("Intial state ", store.getState());

store.subscribe(() => {
  console.log("Update State ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());

store.dispatch(cakeActions.restocked(3));

unsubcribe();
