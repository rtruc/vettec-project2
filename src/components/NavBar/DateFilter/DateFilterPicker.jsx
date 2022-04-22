import styled from "styled-components";
import { theme } from "../../../util/theme";

// TODO: THEME
// const dateFilterPicker_Color = 'white';

export const DateFilterPicker = styled.input.attrs({type: 'date'})`
    background-color: inherit;
    color: ${theme.dateFilterPicker_Color};
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