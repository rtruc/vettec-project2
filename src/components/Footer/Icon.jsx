import styled from "styled-components";
import { theme } from "../../util/theme";

// TODO: THEME
// const icon_BackgroundColor_Hover = 'rgb(235, 16, 246)';

export const Icon = styled.img`
    /* max-height: 35px; */
    max-height: 40px;
    display:flex;
    justify-content: center;
    /* margin-top: 5px; */

    & a:hover {
        background-color: ${theme.icon_BackgroundColor_Hover};
    } 
`