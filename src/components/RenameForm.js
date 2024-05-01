function RenameForm({name, onRename, disableEditMode}) {
    return (
        <form onSubmit={e => {
            e.preventDefault()
            disableEditMode()
        }}>
            <input type="text" value={name}
                   onChange={e => onRename(e.target.value)}/>
        </form>
    )
}

export default RenameForm