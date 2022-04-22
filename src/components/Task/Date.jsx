import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editDate } from "../../redux/actions/actions";

const DueDateDiv = styled.input.attrs({type: 'date'})`
    background-color: inherit;
    border: none;
    cursor: pointer;

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

export const DueDate = ({date, _id}) => {

    const dispatch = useDispatch();

    return (
            <DueDateDiv defaultValue={date} 
            onBlur={e => dispatch(editDate(_id, e.target.value))}
            // onChange={e => dispatch(editDate(_id, e.target.value))}
            />
    )
}