import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../util/theme";

// TODO: THEME
// const navLink_Color = 'white';
// const hover_Color = 'rgb(235, 16, 246)';
// const activeNavLink_BackgroundColor = 'rgba(233, 16, 246, 0.5)';
// const activehover_Color = 'rgb(211, 15, 222)';



export const NavLink = styled(Link)`
    padding: 10px 20px;
    text-decoration: none;
    color: ${theme.navbar_Text};
    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: ${theme.hover_Color};
    }
`;

export const ActiveNavLink = styled(NavLink)`
    background-color: ${theme.active_Color};

    &:hover {
        background-color: ${theme.hover_Color_Alt};
    } 
`;
