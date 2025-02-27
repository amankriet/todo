import { useState } from "react"
import { ReactComponent as AddIcon } from "../icons/add.svg"

function TaskForm({ onAdd }) {
    const [taskName, setTaskName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (!taskName.trim()) return
        onAdd(taskName.trim())
        setTaskName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                placeholder="Write new task..."
            />
            <button><AddIcon /></button>
        </form>
    )
}

export default TaskForm