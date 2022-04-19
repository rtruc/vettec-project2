import styled from "styled-components";

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

export const Title = ({title}) => {
    return (
        <TitleDiv defaultValue={title} />

        // </TitleDiv>
    )
}