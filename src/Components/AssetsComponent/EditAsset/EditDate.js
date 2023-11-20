import { DateTimeSelectionWrapper } from "../Assets.style"

function EditDate(props) {
    const { date, setDate } = props
    return (
        <DateTimeSelectionWrapper
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="datetime-local"
        />
    )
}

export default EditDate