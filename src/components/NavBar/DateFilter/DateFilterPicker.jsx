import styled from "styled-components";

export const DateFilterPicker = styled.input.attrs({type: 'date'})`
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

// export const DateFilterPicker = ({date}) => {
//     console.log("Date: ", date);
//     return (
//         <DateFilterPickerDiv defaultValue={date} />
//     )
// }