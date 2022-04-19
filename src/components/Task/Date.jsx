import styled from "styled-components";

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

export const DueDate = ({date}) => {

    // CUT JSON DATE STRING DOWN TO HTML COMPLIANCE
    date = date.substring(0, 10);
    // console.log("date", date);

    return (
        <>
            <DueDateDiv defaultValue={date} />
        </>
    )
}