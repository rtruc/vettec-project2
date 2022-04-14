import styled from "styled-components"
import { NavItem } from "./NavItem";
import { SearchForm } from "./SearchForm";

export const NavBar = () => {

    const NavBarDiv = styled.div`

        display: flex;
        flex-direction: row;

        flex-wrap: nowrap;
        /* justify-content: flex-start; */
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        background-color: rgba(233, 16, 246, 0.5);

        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        z-index: 10;
        & form:last-child {
            /* margin-left: auto; */
        }`

    const navEntries = [
        { link: "/", name: "ToDo" },
        { link: "/completed", name: "Completed" },
        // { link: "/journey.html", name: "My Journey" },
    ]

    const pathname = window.location.pathname;

    return (
        <>
            <NavBarDiv>
                {navEntries.map((link, index) => {
                    return (
                        <div key={index}>
                            <NavItem link={link.link} name={link.name} active={link.link === pathname} />
                        </div>
                    );
                })}

                {/* <SearchForm /> */}
            </NavBarDiv>
        </>
    );
}