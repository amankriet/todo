import { ReactComponent as UncheckedCheckbox } from "../icons/checkbox-unchecked.svg"
import { ReactComponent as CheckedCheckbox } from "../icons/checkbox-checked.svg"

function Checkbox({checked, onClick}) {
    return (
        <div onClick={onClick}>
            {!checked && (
                <div className="checkbox unchecked">
                    <UncheckedCheckbox />
                </div>
            )}
            {checked && (
                <div className="checkbox checked">
                    <CheckedCheckbox />
                </div>
            )}
        </div>
    )
}

Checkbox.defaultProps = {
    checked: false
}

export default Checkbox