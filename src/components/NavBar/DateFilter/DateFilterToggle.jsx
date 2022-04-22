import styled from "styled-components";

// TODO: THEME
const dateFilterToggler_AccentColor = 'rgba(233, 16, 246, 0.5)';

export const DateFilterToggle = styled.input.attrs({type: 'checkbox'})`
    cursor: pointer;
    position: relative;
    right: 14px;
    /* right: 4px; */
    
    width: 16px;
    height: 16px;
    
    accent-color: ${dateFilterToggler_AccentColor};
`