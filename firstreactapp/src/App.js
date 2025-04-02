import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    document.body.className = theme === "dark" ? "bg-black text-white" : "bg-white text-black";
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center p-6 rounded-lg shadow-lg border border-gray-700 w-96">
        <h1 className="text-3xl font-bold">Welcome to My React App</h1>
        <p className="mt-2 text-lg">This is a sample project for GitHub commit.</p>
        <p className="mt-2 text-lg">Current Time: {time}</p>

        <div className="mt-4">
          <button
            className="mr-2 rounded-xl bg-gray-700 px-4 py-2 hover:bg-gray-600"
            onClick={() => setMessage("Hello, GitHub!")}
          >
            Show Message
          </button>
          <button
            className="rounded-xl bg-blue-600 px-4 py-2 hover:bg-blue-500"
            onClick={() => setCount(count + 1)}
          >
            Increment Count ({count})
          </button>
        </div>

        {message && <p className="mt-4 text-lg">{message}</p>}

        <div className="mt-6">
          <button
            className="rounded-xl bg-green-600 px-4 py-2 hover:bg-green-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Toggle Theme
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Todo List</h2>
          <div className="flex mt-2">
            <input
              className="flex-1 px-2 py-1 text-black rounded-l-md"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task"
            />
            <button
              className="bg-blue-500 px-4 py-1 rounded-r-md hover:bg-blue-400"
              onClick={addTodo}
            >
              Add
            </button>
          </div>
          <ul className="mt-4 text-left">
            {todos.map((todo, index) => (
              <li key={index} className="border-b border-gray-600 py-1">
                {todo}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Fun Facts</h2>
          <ul className="mt-4 text-left">
            <li className="border-b border-gray-600 py-1">React is developed by Facebook.</li>
            <li className="border-b border-gray-600 py-1">Hooks were introduced in React 16.8.</li>
            <li className="border-b border-gray-600 py-1">React uses a virtual DOM for better performance.</li>
            <li className="border-b border-gray-600 py-1">JSX is a syntax extension for JavaScript.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
