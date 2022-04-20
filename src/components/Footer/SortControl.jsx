import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sortAlphabeticallyAscending, sortAlphabeticallyDescending, sortDateAscending, sortDateDescending } from "../../actions/sort";

const ControlsDiv = styled.div`
    display:flex;
    justify-content: center;
`

export const Controls = () => {
    
    const dispatch = useDispatch();
    // const inputRef = useRef();

    return (
        <ControlsDiv>
        <button onClick={() => dispatch(sortAlphabeticallyAscending())}>Sort Title Asc</button>
        <button onClick={() => dispatch(sortAlphabeticallyDescending())}>Sort Title Des</button>
        <button onClick={() => dispatch(sortDateAscending())}>Sort Date Asc</button>
        <button onClick={() => dispatch(sortDateDescending())}>Sort Date Des</button>
        </ControlsDiv>
    );


}