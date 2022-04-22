import styled from "styled-components";
import { theme } from "../../../util/theme";


export const DateFilterToggle = styled.input.attrs({type: 'checkbox'})`
    cursor: pointer;
    position: relative;
    /* position: absolute; */
    right: 14px;
    
    width: 16px;
    height: 16px;
    
    accent-color: ${theme.active_Color};
`