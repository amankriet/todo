import {ReactComponent as EditIcon} from "../icons/edit.svg"
import {ReactComponent as DeleteIcon} from "../icons/delete.svg"

function TaskTools({onDelete, onEdit}) {
    return (
        <div className={'task-tools'}>
            <EditIcon onClick={onEdit} />
            <DeleteIcon onClick={onDelete} />
        </div>
    )
}

export default TaskTools