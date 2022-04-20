import { Task } from "../Task/Task";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    padding-top: 50px;
    padding-bottom: 40px;
`

export const List = (props) => {

    const state = useSelector(state => state);

    // TODO: THIS IS KIND OF HACKY...
    const completionFilter = props.listType === "Completed";

    return (
        <ListDiv>
            {state.map((task, index) => {
                return (
                    task.isComplete === completionFilter ? <Task key={task._id} taskData={task} /> : null
                )
            })}
        </ListDiv>
    );

}
