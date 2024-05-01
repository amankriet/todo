import { useState } from "react"
import addButton from "../icons/add.svg"
import updateButton from "../icons/update-arrow.svg"

function TaskForm({ onAdd }) {
    const [taskName, setTaskName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onAdd(taskName)
        setTaskName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            {true ?
                <button><img className="add-btn" src={addButton} alt="Add New Task" /></button>
                :
                <button><img className="update-btn" src={updateButton} alt="Update Task" /></button>
            }
            <input
                type="text"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                placeholder="Write new task..."
            />
        </form>
    )
}

export default TaskForm