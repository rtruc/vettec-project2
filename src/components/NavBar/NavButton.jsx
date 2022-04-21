import styled from "styled-components";


export const NavButton = styled.button`
    /* padding: 10px 20px; */
    display:flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    max-height: 70px;
    min-height: 40px;

    min-width: 40px;
    max-width: 80px;

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

// export const ActiveNavLink = styled(NavLink)`
//     background-color: rgba(233, 16, 246, 0.5);

//     &:hover {
//         background-color: rgb(211, 15, 222);
//     } 
// `;
