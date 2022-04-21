import { Task } from "../Task/Task";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    padding-top: 50px;
    padding-bottom: 50px;
`

export const List = ({ filters: pageFilter }) => {

    // const tasks = useSelector(state => state.tasks);
    const { tasks, filters } = useSelector(state => state);

    // const allFilters = pageFilters.concat(filters);
    
    
    let workingSet = tasks;
    let reducedSet = [];
    
    // OBJ TEST PATH
    filters.pageFilter = pageFilter;
    // console.log("Filters OBJ: ", filters);

    for (const f in filters) {
        // console.log("f: ", f);
        reducedSet = [];
        if (f.isInactive !== true) {
            reducedSet.push(...workingSet.filter(task => filters[f](task)));
        }
        workingSet = reducedSet;
    }

    // for(let f of allFilters) {
    //     reducedSet = [];
    //     console.log("filter iter: ", f);
    //     if(!undefined) {
    //         reducedSet.push(...workingSet.filter(task => f(task)));
    //     }
    //     workingSet = reducedSet;
    // }


    // console.log("allFilters: ", allFilters);
    //     reducedSet = [];
    //     console.log("filter iter: ", f);
    //     if(!undefined) {
    //         reducedSet.push(...workingSet.filter(task => f(task)));
    //     }
    //     workingSet = reducedSet;
    // }


    // // const tasks = useSelector(state => state.tasks);
    // const {tasks, filters} = useSelector(state => state);

    // const allFilters = pageFilters.concat(filters);

    // let workingSet = tasks;
    // let reducedSet = [];

    // console.log("allFilters: ", allFilters);
    // for(let f of allFilters) {
    //     reducedSet = [];
    //     console.log("filter iter: ", f);
    //     if(!undefined) {
    //         reducedSet.push(...workingSet.filter(task => f(task)));
    //     }
    //     workingSet = reducedSet;
    // }


    return (
        <ListDiv>

            {reducedSet.map((task, index) => {
                return (
                    <Task key={task._id} taskData={task} />
                )
            })}
        </ListDiv>
    );

}
