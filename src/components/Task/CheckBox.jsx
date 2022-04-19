import styled from "styled-components"


// SIMPLE BUT FUNCTIONAL CHECKBOX
// export const CheckBox = styled.input`
export const CheckBox = styled.input.attrs({type: 'checkbox'})`

    /* background-color: pink; */
    /* outline-color: pink; */
    /* border-color: purple; */
    /* outline: 1px solid #1e5180; */
    cursor: pointer;

    /* display: inline-block; */
    width: 14px;
    height: 14px;
    /* border: 2px solid #bcbcbc; */
    border-radius: 2px;

    accent-color: red;
    

`


// TODO: ATTEMPT AT FANCY CHECKBOX...
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

