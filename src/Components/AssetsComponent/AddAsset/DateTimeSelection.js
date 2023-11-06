import { DateTimeSelectionWrapper } from "../Assets.style"

function DateTimeSelection(props) {
    const dateNameProps = props.dateNameProps
    const { date, setDate } = dateNameProps
    return (
        <DateTimeSelectionWrapper
        onChange={(e) => setDate(e.target.value)}
        type="datetime-local"
        />
    )
}

export default DateTimeSelection