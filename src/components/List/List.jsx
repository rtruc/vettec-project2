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

export const List = ({filters}) => {

    const state = useSelector(state => state);

    let displayTasks = [];
    for(let filter of filters) {
        displayTasks.push(...state.filter(task => filters[0](task)));
    }

    return (
        <ListDiv>

            {displayTasks.map((task, index) => {
                return (
                    <Task key={task._id} taskData={task} /> 
                )
            })}
        </ListDiv>
    );

}
