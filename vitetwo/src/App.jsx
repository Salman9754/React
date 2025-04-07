import { useState, useMemo } from "react";
import "./App.css";
import Mycomponent from "./components/Mycomponent";
import { countContext } from "./context/context";
import Form from "./components/Form";
import Tabledata from "./components/Tabledata";

let nums = new Array(3000000).fill(0).map((_, index) => {
  return {
    index,
    isMagical: index === 2900000,
  };
});
function App() {
  const [count, setCount] = useState(0);
  const [numbers, setnumbers] = useState(nums);
  // const Magical = numbers.find(item => item.isMagical === true)
  const Magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers]
  );

  return (
    <>
      <countContext.Provider value={{ count, setCount }}>
      <Tabledata />
        <Form />

        <h1>Vite + React</h1>
        <div className="cards">
          <button
            onClick={() => {
              setCount((count) => count + 1);
              if (count === 10) {
                setnumbers(
                  new Array(100000).fill(0).map((_, index) => {
                    return {
                      index,
                      isMagical: index === 90000,
                    };
                  })
                );
              }
            }}
          >
            count is {count}
          </button>
          <div>Magical number is:{Magical.index} </div>
          <Mycomponent />
        </div>
       
      </countContext.Provider>
    </>
  );
}

export default App;
