// Gets Todo Data
// Parses data for given list
// Passes data to Tasks and displays them
import { Task } from "../Task/Task";
import styled from "styled-components";
import { getTasks } from "../Task/data";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    padding-top: 30px;
    
`

const testData = getTasks();


export const List = (props) => {

    const completionFilter = props.listType === "Completed";


    console.log("Props: ", props.listType);
    // console.log("List Type: ", listType);
    console.log(completionFilter);

    return (
        <ListDiv>
            {testData.map((task, index) => {
                return (
                    task.isComplete === completionFilter ? <Task key={index} taskData={task} /> : null
                )
            })}
        </ListDiv>
    );

}
