import styled from "styled-components";

export const NavButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: none;

    font-size:40px;

    text-decoration: none;
    background-color: inherit;
    color: white;

    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: rgb(235, 16, 246);
    }
`;
