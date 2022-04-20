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

function findTaskNumberIndexByID(state, _id) {
    for(let i in state) {
        if(state[i]._id === _id) {
            return i;
        }
    }
    return -1;
}

export const todoReducer = (state=[], action) => {
    
    switch(action.type) {
        case 'SORT_ALPHA_UP': {
            const newState = [...state];
            newState.sort((t1, t2) => sortByVar(t1, t2, 'title'));            
            return newState;
        }

        case 'SORT_ALPHA_DOWN': {
            const newState = [...state];
            newState.sort((t1, t2) => sortByVar(t2, t1, 'title'));            
            return newState;
        }

        case 'SORT_DATE_UP': {
            const newState = [...state];
            newState.sort((t1, t2) => sortByVar(t1, t2, 'date'));            
            return newState;
        }

        case 'SORT_DATE_DOWN': {
            const newState = [...state];
            newState.sort((t1, t2) => sortByVar(t2, t1, 'date'));            
            return newState;
        }

        case 'ADD_TASK': {
            const newState = [...state];
            const date       = JSON.parse(JSON.stringify(new Date()));
            const isComplete = action.pathName === "/completed" ? true : false;
            
            const newTask = {title     : "New Task", 
                             date      : date,
                             isComplete: isComplete,
                             _id        : generateID()};

            newState.push(newTask);
            return newState;
        }

        case 'CHECKBOX_CLICKED': {
            const newState = [...state];

            const index = findTaskNumberIndexByID(state, action._id);
            newState[index].isComplete = !newState[index].isComplete;

            return newState;
        }

        case 'EDIT_TITLE': {            
            const index = findTaskNumberIndexByID(state, action._id);
            state[index].title = action.textUpdate;

            return state;
        }

        case 'EDIT_DATE': {
            const index = findTaskNumberIndexByID(state, action._id);
            state[index].date = action.dateUpdate;

            return state;
        }

        case 'DELETE_TASK': {
            const newState = [...state];
            const index = findTaskNumberIndexByID(state, action._id);

            newState.splice(index, 1);

            return newState;
        }

        default:
            console.log("DEFAULT REDUCER TRIGGERED");
            console.log("Action: ", action);
            return state;
    }
}