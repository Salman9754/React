import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [cards, setcards] = useState([]);
  async function cardsData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let dataJson = await data.json();
    setcards(dataJson);
    console.log(dataJson);
  }
  useEffect(() => {
    cardsData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="Mycard d-flex flex-wrap">
            {cards.map((item) => {
              return (
                <div key={item.id} className="card col-4">
                  <h6>{item.title}</h6>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
