import { useDispatch } from "react-redux";
import styled from "styled-components"
import { deleteTask } from "../../redux/actions/actions";
import { theme } from "../../util/theme";

// TODO: THEME
// const deleteButton_TextColor = 'purple';
// const deleteButton_TextColor_Hover = 'black';
// const deleteButton_BackgroundColor = '#ff000085';
// const deleteButton_BackgroundColor_Hover = '#ff0000';


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
    color: ${theme.deleteButton_TextColor};

    width: 14px;
    height: 14px;

    box-shadow: 0px 0px 0px 0.5px ${theme.deleteButton_BoxShadow};
    
    margin: 0px 5px;
    background-color: ${theme.deleteButton_BackgroundColor};

    transition-duration: 0.4s;
    
    &:hover {
        background-color: ${theme.deleteButton_BackgroundColor_Hover};
        color: ${theme.deleteButton_TextColor_Hover};
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