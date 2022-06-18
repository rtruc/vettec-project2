import { useDispatch } from "react-redux";
import styled from "styled-components"
import { toggleCompletionStatus } from "../../redux/actions/actions";
import { theme } from "../../util/theme";


export const CheckBoxDiv = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;

    /* For iOS < 15: Not removed via appearance  */
    background-color: white;

    margin: 0;

    cursor: pointer;

    font: inherit;

    width: 1.15em;
    height: 1.15em;
    border: 0.075em solid ${theme.task_BorderShadowColor};
    border-radius: 0.3em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;

    transition: border 250ms;
    &:hover {
        border: 0.15em solid ${theme.task_BorderShadowColor_HoverFocus};

    }

    &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: center;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: ${theme.active_Color};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:disabled {
        --form-control-color: var(--form-control-disabled);

        color: var(--form-control-disabled);
        cursor: not-allowed;
    }
    
    accent-color: ${theme.active_Color};
`

// export const CheckBoxDiv = styled.input.attrs({type: 'checkbox'})`
//     cursor: pointer;

//     width: 18px;
//     height: 18px;
//     border-radius: 2px;

//     margin: 0px 5px;

//     accent-color: ${theme.checkBox_AccentColor};
// `

export const CheckBox = ({isComplete, _id}) => {
    
    const dispatch = useDispatch();
    const clicked  = () => dispatch(toggleCompletionStatus(_id));

    return (
        <>
            {isComplete ? <CheckBoxDiv onClick={clicked} defaultChecked /> :
                          <CheckBoxDiv onClick={clicked} />}
        </>
    )
}



// TODO: ATTEMPT A FANCY CHECKBOX...
// export const CheckBox = styled.input.attrs({ type: 'checkbox' })`

//     appearance: none;
//     margin: 0px 10px;


//     /* font: inherit; */
//     color: #ff98a9;
//     width: 25px;
//     height: 25px;
//     border: 2px solid currentColor;
//     border-radius: 5px;
//     transform: translateY(-0.075em);

//     background-color: #ffe7eb;

//     display: grid;
//     place-content: center;
    

//     accent-color: red;

//     &::before {
//         content: "";
//         width: 0.65em;
//         height: 0.65em;
//         clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
//         transform: scale(0);
//         transform-origin: center;
//         transition: 120ms transform ease-in-out;
//         /* box-shadow: inset 1em 1em var(--form-control-color); */
//         /* Windows High Contrast Mode */
//         background-color: #ff98a9;
//         /* background-color: CanvasText; */
//     }

//     &:checked::before {
//         transform: scale(1);
//     }

//     /* &:focus {
//         outline: max(2px, 0.15em) solid currentColor;
//         outline-offset: max(2px, 0.15em); 
//     } */
// `

