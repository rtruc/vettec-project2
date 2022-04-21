import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleDateFilter } from "../../../redux/actions/actions";
import { CheckBoxDiv } from "../../Task/CheckBox";


const DateFilterToggleDiv = styled.input.attrs({type: 'checkbox'})`
    cursor: pointer;
`

export const DateFilterToggle = () => {

    const dispatch = useDispatch();

    return (
        <CheckBoxDiv onClick={() => dispatch(toggleDateFilter())} />
    )
}