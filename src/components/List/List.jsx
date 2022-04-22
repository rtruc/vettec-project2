import { Task } from "../Task/Task";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    padding-top: 50px;
    padding-bottom: 60px;
`

export const List = () => {

    const { tasks, filters } = useSelector(state => state);    
    
    let workingSet = tasks;
    let filteredSet = [];

    for (const f in filters) {
        filteredSet = [];
        filteredSet.push(...workingSet.filter(task => filters[f](task)));
        
        workingSet = filteredSet;
    }


    return (
        <ListDiv>
            {filteredSet.map((task) => {
                return (
                    <Task key={task._id} taskData={task} />
                )
            })}
        </ListDiv>
    );

}
