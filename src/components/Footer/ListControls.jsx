import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addTask, sortTitlesAscending, sortTitlesDescending, sortDatesAscending, sortDatesDescending } from "../../redux/actions/actions";
import { NavItem } from "../NavBar/NavItem"
import { FooterButton } from "./FooterButton"
import { Icon } from "./Icon";
import { alphaDown, alphaUp, timeDown, timeUp } from "../../img/icons";


const ControlsDiv = styled.div`
    display:flex;
    justify-content: center;
    gap: 5px;
    font-weight: bolder;
    height: 100%;
`

export const ListControls = () => {

    const dispatch = useDispatch();
    let pathname = useLocation().pathname;
    // const inputRef = useRef();

    return (
        <ControlsDiv>
            {/* <NavItem>  */}
            {/* <NavButton onClick = {() => dispatch(sortTitlesAscending())}>Sort Title Ascending</NavButton> */}
            <FooterButton onClick={() => dispatch(sortTitlesAscending())}>
                <Icon src={alphaUp} />
            </FooterButton>
            {/* </NavItem> */}
            {/* <NavButton onClick = {() => dispatch(sortTitlesDescending())}>Sort Title Descending</NavButton> */}
            <FooterButton onClick={() => dispatch(sortTitlesDescending())}>
                <Icon src={alphaDown} />
            </FooterButton>
            {/* <NavButton onClick={() => dispatch(sortDatesAscending())}>Sort Date Ascending</NavButton> */}
            <FooterButton onClick={() => dispatch(sortDatesAscending())}>
            <Icon src={timeUp} />

            </FooterButton>
            {/* <NavButton onClick={() => dispatch(sortDatesDescending())}>Sort Date Descending</NavButton> */}
            <FooterButton onClick={() => dispatch(sortDatesDescending())}>
            <Icon src={timeDown} />    
            </FooterButton>

            {/* <FooterButton onClick={() => dispatch(addTask(pathname))}>+</FooterButton> */}

        </ControlsDiv>
    );


}