// Title
// Date
// IsComplete

import styled from "styled-components";
import { CheckBox } from "./CheckBox";
import { DueDate } from "./Date";
import { TitleDiv } from "./Title";


const TaskDiv = styled.div`
    display: flex;
    flex-direction: column;


`

const TaskRow = styled.div`
    display:flex;
    flex-direction: row;
    
    gap:5px;
    
    align-items:center;
    
    background-color: pink;
    min-width: 300px;
    max-width: 60%;
    
    max-height: 100px;
    
    padding: 5px;
    
    // SAFARI DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    /* outline: 1px solid;
    outline-color: #fdaab8; */
    border-radius:5px;
    box-shadow: 0 0 0 .75pt #fdaab8;

    /* & h2 {
        margin: 0px;
    } */

    & h4 {
        margin: 0px;
    }
`


export const Task = ({ taskData }) => {

    // console.log("Task Date: " + taskData.date);

    return (
        <TaskRow>
            {/* <input type={"checkbox"} /> */}
            {taskData.isComplete ? <CheckBox defaultChecked /> : 
                                   <CheckBox /> }
            
            <TaskDiv>
                <TitleDiv defaultValue={taskData.title} />
                <DueDate date={taskData.date} />
            </TaskDiv>
        </TaskRow>
    )
}