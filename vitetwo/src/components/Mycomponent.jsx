import React from "react";
import { useContext } from "react";
import { countContext } from "../context/context";
const Mycomponent = () => {
  const value = useContext(countContext);
  return (
    <button onClick={()=> value.setCount(value.count + 1)}>
      I am new counter
      <br />
      {value.count}
    </button>
  );
};

export default Mycomponent;
