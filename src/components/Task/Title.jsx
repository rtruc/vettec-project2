import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editTitle } from "../../redux/actions/actions";

// TODO: THEME
const task_PlaceholderText = 'grey';

const DefaultTitleDiv = styled.input.attrs({type: 'text'})`
    background-color: inherit;
    border:none;
    font-family: inherit;
    font-size:1.45em;
    font-weight:900;

    &::placeholder {
        color: ${task_PlaceholderText};
    }

    &:focus {
        outline: none;
    }
`

const NewTitleDiv = styled(DefaultTitleDiv)`
    color:${task_PlaceholderText};
`

export const Title = ({title, _id}) => {

    const dispatch = useDispatch();
    let TitleDiv;

    if(title === "New Task") {
        TitleDiv = NewTitleDiv;
    } else {
        TitleDiv = DefaultTitleDiv;
    }

    return (
        <TitleDiv defaultValue={title} 
        onBlur={e => dispatch(editTitle(_id, e.target.value))} 
        // onChange={e => dispatch(editTitle(_id, e.target.value))} 
        />
    )
}