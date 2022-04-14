import styled from "styled-components";
// import {NavLink} from "./NavLink";

export const NavItem = ({ link, name, active }) => {

    const NavItemDiv = styled.div`
        padding: 10px 0px;
    `;

    const NavLink = styled.a`
        padding: 10px 20px;
        text-decoration: none;
        color: white;
        transition: background-color .2s ease-out 100ms;
        position: relative;

        &:hover {
            background-color: rgb(235, 16, 246);
        }
    `;

    const ActiveNavLink = styled(NavLink)`
        /* font-weight: bolder; */
        background-color: rgba(233, 16, 246, 0.5);
        cursor: pointer;

        &:hover {
            /* font-weight: bolder; */
            background-color: rgb(235, 16, 246);
            cursor: pointer;
        } `

    if (active) {
        return (
            <NavItemDiv>
                <ActiveNavLink href={link}>{name}</ActiveNavLink>
            </NavItemDiv> 
            );
    } else {
        return (
            <NavItemDiv>
                <NavLink href={link}>{name}</NavLink>
            </NavItemDiv>
        );
    }
    

}

