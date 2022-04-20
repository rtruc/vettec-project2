import { Task } from "../Task/Task";
import styled from "styled-components";
import { getTasks } from "../Task/data";
import { useSelector } from "react-redux";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    padding-top: 50px;
    padding-bottom: 40px;
`
const testData = getTasks();

export const List = (props) => {
    // let testData = useSelector(state => state.tasks);
    // console.log("Tasks List: ", testData);

    const stateData = useSelector(state => state);
    // console.log("List State: ", stateData);

    // TODO: THIS IS KIND OF HACKY...
    const completionFilter = props.listType === "Completed";

    return (
        <ListDiv>
            {stateData.map((task, index) => {
                return (
                    task.isComplete === completionFilter ? <Task key={task._id} taskData={task} /> : null
                )
            })}
        </ListDiv>
    );

}
