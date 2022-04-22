import styled from "styled-components";
import { convertDateToHTMLCompliantString } from "../../util/data";
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
    
    background-color: #ffedf0;
    min-width: 300px;
    max-width: 60%;
    max-height: 100px;

    padding: 5px;

    transition: all 0.2s ease;
    
    // WEBKIT DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    /* outline: 1px solid;
    outline-color: #fdaab8; */
    border-radius:5px;
    box-shadow: 0 0 0 .75pt #ffe0e5;

    &:hover, &:focus{
        filter: saturate(1.95);
        box-shadow: 0 0 0 1.75pt #fdd5db;
        /* transform: scale(1.025); */
    }
`

const OverdueTask = styled(NormalTask)`
        background-color: #f76d84;
        box-shadow: 0 0 0 .75pt #ff7d92;
        &:hover{
            box-shadow: 0 0 0 1.75pt #fe5471;
            filter: brightness(1.05);
        }
`

const CompletedTask = styled(NormalTask)`
    opacity: 50%;
    &:hover{
            filter: contrast(1.05);
        }
`

export const Task = ({ taskData }) => {
    
    let currentDate = convertDateToHTMLCompliantString(new Date());
    let TaskRowDiv;
    
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