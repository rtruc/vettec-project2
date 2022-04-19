import styled from "styled-components";
import { List } from "../components/List/List";

const CenteredHeading = styled.h1`
    text-align: center;
`

export const Todo = () => {
    return (
        <>
            <br></br>
            {/* <CenteredHeading>Todo List</CenteredHeading> */}
            <List listType="Todo" />
        </>
    );
}