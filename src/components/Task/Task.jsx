import styled from "styled-components";
import { CheckBox } from "./CheckBox";
import { DueDate } from "./Date";
import { DeleteButton } from "./DeleteButton";
import { Title } from "./Title";


const TaskColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const NormalTask = styled.div`
    display:flex;
    flex-direction: row;
    gap:5px;
    align-items:center;

    position:relative;
    
    /* background-color: pink; */
    /* background-color: #ffdce2; */
    background-color: #ffedf0;
    min-width: 300px;
    max-width: 60%;
    max-height: 100px;

    
    padding: 5px;
    
    // SAFARI DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    /* outline: 1px solid;
    outline-color: #fdaab8; */
    border-radius:5px;
    /* box-shadow: 0 0 0 .75pt #fdaab8; */
    /* box-shadow: 0 0 0 .75pt #ffcad3; */
    box-shadow: 0 0 0 .75pt #ffe0e5;

    /* transition-duration: 0.4s; */
    /* transition: opacity .2s ease-out 100ms; */

`

const OverdueTask = styled(NormalTask)`
        background-color: #fb91a2;
        box-shadow: 0 0 0 .75pt #ff7d92;
`
const CompletedTask = styled(NormalTask)`
    background-color: #ffedf0;
    box-shadow: 0 0 0 .75pt #ffe0e5;
    opacity: 50%;
    /* background-color: #ffdce2; */
    /* box-shadow: 0 0 0 .75pt #ffcad3; */
`




// const TaskRowDiv = OverdueTask;
// const TaskRowDiv = CompletedTask;


export const Task = ({ taskData }) => {
    
    let currentDate = JSON.parse(JSON.stringify(new Date())).substring(0, 10);
    let TaskRowDiv;
    
    // console.log(currentDate);

    if(taskData.isComplete === true) {
        TaskRowDiv = CompletedTask;
    }
    else if(taskData.date >= currentDate) {
        TaskRowDiv = NormalTask;
    } else {
        TaskRowDiv = OverdueTask;
    }

    return (
        <TaskRowDiv>

            <CheckBox isComplete={taskData.isComplete} _id={taskData._id} />
            <DeleteButton _id={taskData._id} />

            <TaskColumn>
                <Title title={taskData.title} _id={taskData._id}/>
                <DueDate date={taskData.date}  _id={taskData._id} />
            </TaskColumn>
        </TaskRowDiv>
    )
}