import styled from "styled-components";
import { theme } from "../../util/theme";

// TODO: THEME
// const navButton_Color = 'white';
// const navButton_BackgroundColor_Hover = 'rgb(235, 16, 246)';

export const NavButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: none;

    font-size:40px;

    text-decoration: none;
    background-color: inherit;
    color: ${theme.navButton_Color};

    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: ${theme.navButton_BackgroundColor_Hover};
    }
`;
