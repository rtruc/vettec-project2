import { getTasks } from "../components/Task/data";

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

export const sorterReducer = (state=[], action) => {
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
        default:
            return state;
    }
}