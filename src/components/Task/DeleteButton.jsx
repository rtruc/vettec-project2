import { useDispatch } from "react-redux";
import styled from "styled-components"
import { deleteTask } from "../../actions/actions";


// export const DeleteButtonDiv = styled.input.attrs({type: 'button'})`
export const DeleteButtonDiv = styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;

    margin: 0px 5px;
    background-color: red;
`

export const DeleteButton = ({_id}) => {
    
    const dispatch = useDispatch();
    const clicked  = () => dispatch(deleteTask(_id));

    return (
        <>
            <DeleteButtonDiv onClick = {clicked}>X</DeleteButtonDiv> 
        </>
    )
}