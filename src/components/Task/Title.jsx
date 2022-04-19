import styled from "styled-components";

export const TitleDiv = styled.input.attrs({type: 'text'})`

    background-color: inherit;
    border:none;
    font-family: inherit;
    font-size:1.45em;
    /* font-size:200px; */
    font-weight:900;
    /* color:black; */

    &::placeholder {
        color: gray;
    }

    &:focus {
        /* background-color:purple; */
        /* border: none; */
        outline: none;
    }
    
`