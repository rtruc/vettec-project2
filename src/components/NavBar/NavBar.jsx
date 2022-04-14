import styled from "styled-components"
import { NavItem } from "./NavItem";
import { SearchForm } from "./SearchForm";

export const NavBar = () => {

    const NavBarDiv = styled.div`

        display: flex;
        flex-direction: row;

        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        background-color: rgba(128, 128, 128, 0.503);

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        z-index: 10;
        & form:last-child {
            margin-left: auto;
        }`

    const navEntries = [
        { link: "/index.html", name: "Home" },
        { link: "/about-me.html", name: "About Me" },
        { link: "/journey.html", name: "My Journey" },
    ]

    const pathname = window.location.pathname;

    return (
        <>
            <NavBarDiv>
                {navEntries.map((link, index) => {
                    return (
                        <NavItem link={link.link} name={link.name} active={link.link == pathname} />
                    );
                })}

                <SearchForm />
            </NavBarDiv>
        </>
    );
}