import styled from "styled-components";

// TODO: THEME
const icon_BackgroundColor_Hover = 'rgb(235, 16, 246)';

export const Icon = styled.img`
    /* max-height: 35px; */
    max-height: 40px;
    display:flex;
    justify-content: center;
    /* margin-top: 5px; */

    & a:hover {
        background-color: ${icon_BackgroundColor_Hover};
    } 
`