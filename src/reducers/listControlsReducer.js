import { generateID, getTasks } from "../components/Task/data";

let testData = getTasks();

function sortTitle(t1, t2, parameter) {
    if (t1[parameter] < t2[parameter]) {
        return -1;
    }
    if (t1[parameter] > t2[parameter]) {
        return 1;
    }
    return 0;
}

export const listControlsReducer = (state=[], action) => {
    const newState = [...state];
    
    switch(action.type) {
        case 'SORT_ALPHA_UP':
            newState.sort((t1, t2) => sortTitle(t1, t2, 'title'));            
            return newState;
        case 'SORT_ALPHA_DOWN':
            newState.sort((t1, t2) => sortTitle(t2, t1, 'title'));            
            return newState;
        case 'SORT_DATE_UP':
            newState.sort((t1, t2) => sortTitle(t1, t2, 'date'));            
            return newState;
        case 'SORT_DATE_DOWN':
            newState.sort((t1, t2) => sortTitle(t2, t1, 'date'));            
            return newState;
        case 'ADD_TASK':
            // const date = new Date();
            const date = JSON.parse(JSON.stringify(new Date()));
            const isComplete = action.pathName === "/completed" ? true : false;
            
            // console.log("Date: ", date);
            console.log("isComplete: ", isComplete);
            console.log("PathName: ", action.pathName);
            
            const newTask = {title:"New Task", date:date,
                              isComplete: isComplete, id: generateID()};

            newState.push(newTask);
            return newState;
        case 'CHECKBOX_CLICKED':
            console.log(action.id);
            for(let state of newState) {
                if(state.id === action.id) {
                    state.isComplete = !state.isComplete;
                }
            }
            // console.log(this);
            return newState;

        default:
            return state;
    }
}