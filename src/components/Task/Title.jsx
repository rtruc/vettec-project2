import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editTitle } from "../../actions/actions";

const TitleDiv = styled.input.attrs({type: 'text'})`

    background-color: inherit;
    border:none;
    font-family: inherit;
    font-size:1.45em;
    font-weight:900;

    &::placeholder {
        color: gray;
    }

    &:focus {
        outline: none;
    }
    
`


export const Title = ({title, _id}) => {

    const dispatch = useDispatch();

    return (
        <TitleDiv defaultValue={title} onChange={e => dispatch(editTitle(_id, e.target.value))} />
    )
}