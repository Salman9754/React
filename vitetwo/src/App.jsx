import { useState,useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mycomponent from "./components/Mycomponent";
import { countContext } from "./context/context";

let nums = new Array(3000000).fill(0).map((_,index)=>{
  return{
    index,
    isMagical: index === 2900000

  }
})
function App() {
  const [count, setCount] = useState(0);
  const [numbers, setnumbers] = useState(nums)
  // const Magical = numbers.find(item => item.isMagical === true)
  const Magical = useMemo(() => numbers.find(item=>  item.isMagical === true), [numbers])

  return (
    <>
      <countContext.Provider value={{count,setCount}}>
        <div>Magical number is:{Magical.index} </div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Mycomponent />
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => {setCount((count) => count + 1)
            if(count === 10){
              setnumbers(new Array(100000).fill(0).map((_,index)=>{
                return{
                  index,
                  isMagical: index === 90000
              
                }
              }))
            }
          }
            
          }>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </countContext.Provider>
    </>
  );
}

export default App;
