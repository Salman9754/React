import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const btnRef = useRef();
  const a = useRef(0);

  useEffect(() => {
    // console.log('I will run Every Time');
  });
  useEffect(() => {
    // console.log('I will run First Time');
    btnRef.current.style.backgroundColor = "red";
  }, []);
  useEffect(() => {
    // console.log('I will run when setCount state Changes');
    a.current = a.current + 1;
    console.log(a.current);
  }, [count]);

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
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
