import styled from "styled-components";
import { List } from "../components/List/List";


const CenteredHeading = styled.h1`
    text-align: center;
`

export const Completed = () => {
    return (
        <>
        <br></br>
        {/* <CenteredHeading>Completed List</CenteredHeading> */}
        <List listType="Completed" />

        </>
    );
}