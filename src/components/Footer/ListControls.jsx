import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addTask, sortTitlesAscending, sortTitlesDescending, sortDatesAscending, sortDatesDescending } from "../../redux/actions/actions";
import { NavItem } from "../NavBar/NavItem"
import { NavButton } from "../NavBar/NavButton"
import { Icon } from "./Icon";
import { alphaDown, alphaUp, timeDown, timeUp } from "../../img/icons";


const ControlsDiv = styled.div`
    display:flex;
    justify-content: center;
    gap: 5px;
    font-weight: bolder;
`

export const Controls = () => {

    const dispatch = useDispatch();
    let pathname = useLocation().pathname;
    // const inputRef = useRef();

    return (
        <ControlsDiv>
            {/* <NavItem>  */}
            {/* <NavButton onClick = {() => dispatch(sortTitlesAscending())}>Sort Title Ascending</NavButton> */}
            <NavButton onClick={() => dispatch(sortTitlesAscending())}>
                <Icon src={alphaUp} />
            </NavButton>
            {/* </NavItem> */}
            {/* <NavButton onClick = {() => dispatch(sortTitlesDescending())}>Sort Title Descending</NavButton> */}
            <NavButton onClick={() => dispatch(sortTitlesDescending())}>
                <Icon src={alphaDown} />
            </NavButton>
            {/* <NavButton onClick={() => dispatch(sortDatesAscending())}>Sort Date Ascending</NavButton> */}
            <NavButton onClick={() => dispatch(sortDatesAscending())}>
            <Icon src={timeUp} />

            </NavButton>
            {/* <NavButton onClick={() => dispatch(sortDatesDescending())}>Sort Date Descending</NavButton> */}
            <NavButton onClick={() => dispatch(sortDatesDescending())}>
            <Icon src={timeDown} />
                
            </NavButton>
            <NavButton onClick={() => dispatch(addTask(pathname))}>+</NavButton>
        </ControlsDiv>
    );


}