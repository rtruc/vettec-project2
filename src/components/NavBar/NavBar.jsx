import { useLocation } from "react-router-dom";
import styled from "styled-components"
import { NavItem } from "./NavItem";
// import { SearchForm } from "./SearchForm";

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
export const NavBar = () => {


    const navEntries = [
        { url: "/todo", name: "ToDo" },
        { url: "/completed", name: "Completed" },
        // { link: "/journey.html", name: "My Journey" },
    ]

    // const pathname = window.location.pathname;
    // console.log(pathname);
    // const name = window.location.
    
    let pathname = useLocation().pathname;
    console.log(pathname);


    return (
        <>
            <NavBarDiv>
                {navEntries.map((entry, index) => {
                    return (
                        <div key={index}>
                            <NavItem link={entry.url} name={entry.name} active={pathname === entry.url} />
                        </div>
                    );
                })}

                {/* <SearchForm /> */}
            </NavBarDiv>
        </>
    );
}