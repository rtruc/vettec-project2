import { generateID } from "../../util/data";


function sortByVar(t1, t2, property) {
    if (t1[property] < t2[property]) {
        return -1;
    }
    if (t1[property] > t2[property]) {
        return 1;
    }
    return 0;
}

function findTaskNumberIndexByID(tasks, _id) {
    for(let i in tasks) {
        if(tasks[i]._id === _id) {
            return i;
        }
    }
    return -1;
}

export const todoReducer = (state={}, action) => {
    
    switch(action.type) {
        case 'SORT_ALPHA_UP': {
            const tasks = [...state.tasks];
            tasks.sort((t1, t2) => sortByVar(t1, t2, 'title'));            
            return {tasks: tasks, filters: [...state.filters]};
        }

        case 'SORT_ALPHA_DOWN': {
            const tasks = [...state.tasks];
            tasks.sort((t1, t2) => sortByVar(t2, t1, 'title'));            
            return {tasks: tasks, filters: [...state.filters]};
        }

        case 'SORT_DATE_UP': {
            const tasks = [...state.tasks];
            tasks.sort((t1, t2) => sortByVar(t1, t2, 'date'));            
            return {tasks: tasks, filters: [...state.filters]};
        }

        case 'SORT_DATE_DOWN': {
            const tasks = [...state.tasks];
            tasks.sort((t1, t2) => sortByVar(t2, t1, 'date'));            
            return {tasks: tasks, filters: [...state.filters]};
        }

        case 'ADD_TASK': {
            const tasks = [...state.tasks];
            const date       = JSON.parse(JSON.stringify(new Date()));
            const isComplete = action.pathName === "/completed" ? true : false;
            
            const newTask = {title     : "New Task", 
                             date      : date,
                             isComplete: isComplete,
                             _id        : generateID()};

            tasks.push(newTask);
            return {tasks: tasks, filters: [...state.filters]};
        }

        case 'CHECKBOX_CLICKED': {
            const tasks = [...state.tasks];

            const index = findTaskNumberIndexByID(tasks, action._id);
            tasks[index].isComplete = !tasks[index].isComplete;

            return {tasks: tasks, filters: [...state.filters]};
        }

        case 'EDIT_TITLE': {            
            const index = findTaskNumberIndexByID(state.tasks, action._id);
            state.tasks[index].title = action.textUpdate;

            return state;
        }

        case 'EDIT_DATE': {
            const index = findTaskNumberIndexByID(state.tasks, action._id);
            state.tasks[index].date = action.dateUpdate;

            return state;
        }

        case 'DELETE_TASK': {
            const tasks = [...state.tasks];
            const index = findTaskNumberIndexByID(tasks, action._id);

            tasks.splice(index, 1);

            return {tasks: tasks, filters: [...state.filters]};
        }

        default:
            console.log("DEFAULT REDUCER TRIGGERED");
            console.log("Action: ", action);
            return state;
    }
}