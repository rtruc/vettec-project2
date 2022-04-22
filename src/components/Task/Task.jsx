import styled from "styled-components";
import { convertDateToHTMLCompliantString } from "../../util/data";
import { theme } from "../../util/theme";
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
    
    background-color: ${theme.task_BackgroundColor};
    min-width: 300px;
    max-width: 60%;
    max-height: 100px;

    padding: 5px;

    transition: all 0.2s ease;
    
    // WEBKIT DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    border-radius:5px;
    box-shadow: 0 0 0 .75pt ${theme.task_BorderShadowColor};

    &:hover, &:focus{
        filter: saturate(1.95);
        box-shadow: 0 0 0 1.75pt ${theme.task_BorderShadowColor_HoverFocus};
        transform: scale(1.025);
    }
`

const OverdueTask = styled(NormalTask)`
        background-color: ${theme.task_Overdue_BackgroundColor};
        box-shadow: 0 0 0 .75pt ${theme.task_Overdue_BorderShadowColor};
        &:hover{
            box-shadow: 0 0 0 2.00pt ${theme.task_Overdue_BorderShadowColor_HoverFocus};
            filter: brightness(1.05);
        }
`

const CompletedTask = styled(NormalTask)`
    opacity: 60%;
    &:hover{
        opacity: 80%;
            filter: contrast(1.05);
        }
`

export const Task = ({props, taskData }) => {
    
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
                <DueDate isComplete={taskData.isComplete} date={taskData.date} currentDate={currentDate}  _id={taskData._id}  />
            </TaskColumn>
        </TaskRowDiv>
    )
}