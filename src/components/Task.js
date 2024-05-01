import Checkbox from "./Checkbox"
import TaskTools from "./TaskTools"
import {useState} from "react"
import RenameForm from "./RenameForm";

function Task({ name, done, onToggle, onDelete, onRename }) {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={'task ' + (done?'done':'')}>
            <Checkbox checked={done} onClick={() => onToggle(!done)} />
            {!editMode && (
                <span>{name}</span>
            )}
            {editMode && (
                <RenameForm name={name} onRename={onRename} disableEditMode={() => setEditMode(false)} />
            )}
            <TaskTools onDelete={onDelete} onEdit={() => setEditMode(prev => !prev)} />
        </div>
    )
}

export default Task