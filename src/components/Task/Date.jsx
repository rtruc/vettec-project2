import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editDate } from "../../redux/actions/actions";
import { theme } from "../../util/theme";

const StandardDueDateDiv = styled.input.attrs({type: 'date'})`
    background-color: inherit;
    border: none;
    cursor: pointer;

    font-family: 'Lato', sans-serif;

    color: ${theme.task_TextColor};


    // HIDES DATE PICKER CALENDAR ICON
    &::-webkit-calendar-picker-indicator{
        display: none;
    }
    &::-webkit-input-placeholder{ 
        visibility: hidden !important;
    }

    &:focus {
        outline:none;
    }
`

const OverdueDateDiv = styled(StandardDueDateDiv)`
    color: ${theme.task_TextColor_Overdue};
`

export const DueDate = ({date, currentDate, isComplete, _id}) => {

    const dispatch = useDispatch();
    let DueDateDiv;
    if(isComplete === false && currentDate > date) {
        DueDateDiv = OverdueDateDiv;
    } else {
        DueDateDiv = StandardDueDateDiv;
    }

    return (
            <DueDateDiv required defaultValue={date} 
            onBlur={e => dispatch(editDate(_id, e.target.value))}
            // onChange={e => dispatch(editDate(_id, e.target.value))}
            />
    )
}