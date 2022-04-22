import { Link } from "react-router-dom";
import styled from "styled-components";

// TODO: THEME
const navLink_Color = 'white';
const navLink_BackgroundColor_Hover = 'rgb(235, 16, 246)';
const activeNavLink_BackgroundColor = 'rgba(233, 16, 246, 0.5)';
const activeNavLink_BackgroundColor_Hover = 'rgb(211, 15, 222)';





export const NavLink = styled(Link)`
    padding: 10px 20px;
    text-decoration: none;
    color: ${navLink_Color};
    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: ${navLink_BackgroundColor_Hover};
    }
`;

export const ActiveNavLink = styled(NavLink)`
    background-color: ${activeNavLink_BackgroundColor};

    &:hover {
        background-color: ${activeNavLink_BackgroundColor_Hover};
    } 
`;
