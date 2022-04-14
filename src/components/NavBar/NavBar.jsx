import styled from "styled-components"
import { NavItem } from "./NavItem";
import { SearchForm } from "./SearchForm";


export const NavBar = () => {

    const NavBarDiv = styled.div`
        /* @import url(https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext); */
        /* font-family: 'Lato', sans-serif; */

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

    return (
        <>
            <NavBarDiv>
                <NavItem link={"./index.html"} name={"Home"} />
                <NavItem link={"./about-me.html"} name="About Me" />
                <NavItem link={"./journey.html"} name="My Journey" />

                <SearchForm />
            </NavBarDiv>
        </>
    );
}