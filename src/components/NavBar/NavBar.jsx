import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import { addTask } from "../../redux/actions/actions";
import { theme } from "../../util/theme";
import { DateFilter } from "./DateFilter/DateFilter";
import { FooterButton } from "../Footer/FooterButton";
import { NavItem } from "./NavItem";
import { ActiveNavLink, NavLink } from "./NavLink";
import { SearchForm } from "./SearchForm";
import { NavBarButton } from "./NavBarButton";


const NavBarDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: ${theme.navBar_BackgroundColor};

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    z-index: 10;
`

export const NavBar = (props) => {
    
    const navEntries = [
        { url: "/", name: "ToDo" },
        { url: "/completed", name: "Completed" },
        { url: "/all", name: "All" },
    ]
    
    const dispatch = useDispatch();
    let pathname = useLocation().pathname;
    
    return (
        <>
            <NavBarDiv>
                <DateFilter />
                {navEntries.map((entry, index) => {
                    return (
                             <NavItem key={index}>
                                 {entry.url === pathname ? <ActiveNavLink to={entry.url}>{entry.name}</ActiveNavLink> :
                                                            <NavLink to={entry.url}>{entry.name}</NavLink>}
                            </NavItem> 
                    );
                })}
                {/* <NavItem onClick={() => dispatch(addTask(pathname))}>+</NavItem> */}
                <NavBarButton onClick={() => dispatch(addTask(pathname))}>+</NavBarButton>

                <SearchForm />
            </NavBarDiv>
        </>
    );
}