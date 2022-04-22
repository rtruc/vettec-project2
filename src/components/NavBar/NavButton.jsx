import styled from "styled-components";
import { theme } from "../../util/theme";

// TODO: THEME
// const navButton_Color = 'white';
// const hover_Color = 'rgb(235, 16, 246)';

export const NavButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: none;

    font-size:40px;

    text-decoration: none;
    background-color: inherit;
    color: ${theme.navbar_Text};

    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: ${theme.hover_Color};
    }
`;
