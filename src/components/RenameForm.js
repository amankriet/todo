import { useState } from "react"

function RenameForm({ name, onRename, disableEditMode }) {
    const [tempName, setTempName] = useState(name)

    const handleSubmit = (e) => {
        e.preventDefault()

        onRename(tempName)
        disableEditMode()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={tempName}
                onChange={e => setTempName(e.target.value)}
            />
            <button type="submit">Rename</button>
        </form>
    )
}

export default RenameForm