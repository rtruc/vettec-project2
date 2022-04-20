import styled from "styled-components";
import { CheckBox } from "./CheckBox";
import { DueDate } from "./Date";
import { DeleteButton } from "./DeleteButton";
import { Title } from "./Title";


const TaskColumn = styled.div`
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

`


export const Task = ({ taskData }) => {

    return (
        <TaskRow>

            <CheckBox isComplete={taskData.isComplete} _id={taskData._id} />
            <DeleteButton _id={taskData._id} />

            <TaskColumn>
                <Title title={taskData.title} _id={taskData._id}/>
                <DueDate date={taskData.date}  _id={taskData._id} />
            </TaskColumn>
        </TaskRow>
    )
}