import Checkbox from "./Checkbox"
import TaskTools from "./TaskTools"
import { useState } from "react"
import RenameForm from "./RenameForm";

function Task({ task, completed, onToggle, onDelete, onRename }) {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={'task ' + (completed ? 'done' : '')}>
            <Checkbox checked={completed} onClick={() => onToggle(!completed)} />
            {!editMode && (<span>{task}</span>)}
            {editMode && (
                <RenameForm
                    name={task}
                    onRename={onRename}
                    disableEditMode={() => setEditMode(false)}
                />
            )}
            <TaskTools onDelete={onDelete} onEdit={() => setEditMode(prev => !prev)} />
        </div>
    )
}

export default Task