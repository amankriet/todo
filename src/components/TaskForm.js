import { useState } from "react"
import {ReactComponent as AddIcon} from "../icons/add.svg"

function TaskForm({ onAdd }) {
    const [taskName, setTaskName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onAdd(taskName)
        setTaskName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <button><AddIcon /></button>
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