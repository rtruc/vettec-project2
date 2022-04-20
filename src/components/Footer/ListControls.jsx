import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addTask, sortAlphabeticallyAscending, sortAlphabeticallyDescending, sortDateAscending, sortDateDescending } from "../../actions/actions";

const ControlsDiv = styled.div`
    display:flex;
    justify-content: center;
`

export const Controls = () => {

    const dispatch = useDispatch();
    let pathname = useLocation().pathname;
    // const inputRef = useRef();

    return (
        <ControlsDiv>
        <button onClick={() => dispatch(sortAlphabeticallyAscending())}>Sort Title Asc</button>
        <button onClick={() => dispatch(sortAlphabeticallyDescending())}>Sort Title Des</button>
        <button onClick={() => dispatch(sortDateAscending())}>Sort Date Asc</button>
        <button onClick={() => dispatch(sortDateDescending())}>Sort Date Des</button>
        <button onClick={() => dispatch(addTask(pathname))}>+</button>
        </ControlsDiv>
    );


}