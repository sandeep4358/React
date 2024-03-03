import { React } from "react";
import Hook05 from "./component/Hook05";
import { Provider } from "react-redux";

import { skaStore } from "./component/redux/store";

const App = () => {
  return (
    <div>
      <Provider store={skaStore}>
        <Hook05 />
      </Provider>
    </div>
  );
};

export default App;
