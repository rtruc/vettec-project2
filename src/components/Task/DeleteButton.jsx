import { useDispatch } from "react-redux";
import styled from "styled-components"
import { deleteTask } from "../../redux/actions/actions";


// export const DeleteButtonDiv = styled.input.attrs({type: 'button'})`
export const DeleteButtonDiv = styled.button`
    cursor: pointer;

    position:absolute;
    top: 5px;
    right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 10px;

    font-weight: 100;
    font-size: 10px;
    color: purple;

    width: 14px;
    height: 14px;

    box-shadow: 0px 0px 0px 0.5px red;
    
    margin: 0px 5px;
    /* background-color: #fc8888; */
    background-color: #ff000085;

    transition-duration: 0.4s;
    
    &:hover {
        background-color: #ff0000;
        color: black;
    }
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