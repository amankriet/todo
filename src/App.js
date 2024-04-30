import "./App.css"
import { useState } from "react"
import deleteIcon from "./icons/delete.svg"
import editIcon from "./icons/edit.svg"
import addButton from "./icons/add.svg"
import updateButton from "./icons/update-arrow.svg"

function App() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [taskIndex, setTaskIndex] = useState(-1)

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleTask = () => {
    setList([...list, input])
    setInput("");
  }
  const handleUpdate = () => {
    if (taskIndex !== -1) {
      list.splice(taskIndex, 1, input)
      setInput("")
      setTaskIndex(-1)
    } else {
      alert("No task selected for update")
    }
  }

  const handleDelete = (i) => {
    const filterList = list.filter((ele) => ele !== list[i])
    setList(filterList)
  }

  const handleEdit = (i) => {
    const filterList = list.filter((ele) => ele === list[i])
    setInput(filterList[0])
    setTaskIndex(i);
  }

  return (
    <div className="App">
      <h2>ToDo App</h2>
      <div className="container">
        <form className="input-box">
          <input
            type="text"
            value={input}
            className="todo-input"
            placeholder="Enter new task"
            onChange={(e) => handleInput(e)}
          />
          {taskIndex > -1 ?
            <img src={updateButton} alt="Update Button" className="update-button" title="Update Task" onClick={handleUpdate} />
            :
            <img src={addButton} alt="Add button" className="add-button" title="Add Task" onClick={handleTask} />}
        </form>
        <div className="list">
          <ul>
            {list.map((item, i) => <li key={i}>{item} <img src={deleteIcon} alt="Delete" className="icon-button del-icon" title="Delete" onClick={() => handleDelete(i)} />
              <img src={editIcon} alt="Edit" title="Edit" className="icon-button edit-icon" onClick={() => handleEdit(i)} /> </li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
