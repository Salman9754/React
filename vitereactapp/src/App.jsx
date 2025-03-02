import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCount] = useState(0);
  function addValue() {
    if (counter >= 0) {
      counter = counter + 1;
      setCount(counter);
      console.log(counter);
    }
  }
  function decVal() {
    if (counter > 0) {
      counter = counter - 1;
      setCount(counter);
      console.log(counter);
    }
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite and React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={decVal}>Decrease Value {counter}</button>
    </>
  );
}

export default App;
