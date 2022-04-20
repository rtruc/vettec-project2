import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addTask, sortTitlesAscending, sortTitlesDescending, sortDatesAscending, sortDatesDescending } from "../../actions/actions";
import {NavItem} from "../NavBar/NavItem"
import {NavButton} from "../NavBar/NavButton"


const ControlsDiv = styled.div`
    display:flex;
    justify-content: center;
    gap: 5px;
    font-weight: bolder;
`

export const Controls = () => {

    const dispatch = useDispatch();
    let   pathname = useLocation().pathname;
    // const inputRef = useRef();

    return (
        <ControlsDiv>
            {/* <NavItem>  */}
        <NavButton onClick = {() => dispatch(sortTitlesAscending())}>Sort Title Ascending</NavButton>
            {/* </NavItem> */}
        <NavButton onClick = {() => dispatch(sortTitlesDescending())}>Sort Title Descending</NavButton>
        <NavButton onClick = {() => dispatch(sortDatesAscending())}>Sort Date Ascending</NavButton>
        <NavButton onClick = {() => dispatch(sortDatesDescending())}>Sort Date Descending</NavButton>
        <NavButton onClick = {() => dispatch(addTask(pathname))}>+</NavButton>
        </ControlsDiv>
    );


}