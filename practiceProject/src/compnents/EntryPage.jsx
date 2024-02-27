import { useState } from "react";
import UseEffectPractice from "./UseEffectPractice";
import Products from "./products/Products";
import Navigation from "./Navigation";

const EntryPage = () => {
  const [toggled, setToggled] = useState(false);

  const showProduct = () => {
    console.log("show product called");
    setToggled(true);
  };
  const hideProduct = () => {
    setToggled(false);
  };

  //return <UseEffectPractice />;
  return (
    <>
    {/* navigation bar */}
      <Navigation showProduct={showProduct} hideProduct={hideProduct} />
      
      {/* will decide which one to call  */}
      {toggled ? <Products /> : <UseEffectPractice />}
    </>
  );
};

export default EntryPage;
