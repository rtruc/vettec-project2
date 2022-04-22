import styled from "styled-components";

export const DateFilterPicker = styled.input.attrs({type: 'date'})`
    background-color: inherit;
    color: white;
    border: none;
    cursor: pointer;

    font-family: 'Lato', sans-serif;


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