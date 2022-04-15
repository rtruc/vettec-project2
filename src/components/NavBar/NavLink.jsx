import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavLink = styled(Link)`
    padding: 10px 20px;
    text-decoration: none;
    color: white;
    transition: background-color .2s ease-out 100ms;
    /* position: relative; */

    &:hover {
        background-color: rgb(235, 16, 246);
    }
`;

export const ActiveNavLink = styled(NavLink)`
    background-color: rgba(233, 16, 246, 0.5);

    &:hover {
        background-color: rgb(211, 15, 222);
    } 
`;
