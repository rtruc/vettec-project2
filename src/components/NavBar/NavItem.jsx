import styled from "styled-components";
// import {NavLink} from "./NavLink";

export const NavItem = ({link, name}) => {

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
            background-color: rgb(203, 201, 201);
        }
    `;

    return (
        <NavItemDiv>
            <NavLink href={link}>{name}</NavLink>
        </NavItemDiv>
    )

}

