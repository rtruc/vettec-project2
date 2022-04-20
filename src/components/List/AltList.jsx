import { Task } from "../Task/Task";
import styled from "styled-components";
import { getTasks } from "../Task/data";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    padding-top: 50px;
`

const testData = getTasks();


export const AltList = (props) => {

    // TODO: THIS IS KIND OF HACKY...
    const completionFilter = props.listType === "Completed";

    return (
        <ListDiv>
            {testData.map((task, index) => {
                return (
                    task.isComplete === completionFilter ? <Task key={task._id} taskData={task} /> : null
                )
            })}
        </ListDiv>
    );

}
