import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h2>ToDo App</h2>
      <div className="container">
        <div className="input-box">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />{" "}
          <button>Add Task</button>
        </div>
        <div className="list">
          <ul>
            <li>List</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
