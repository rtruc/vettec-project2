import { convertDateToHTMLCompliantString, generateID } from "../../util/data";
import { dateFilter, textFilter } from "../../util/filters";


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
            console.log(state);
            state.tasks.sort((t1, t2) => sortByVar(t1, t2, 'title'));            
            return {...state};
        }

        case 'SORT_ALPHA_DOWN': {
            state.tasks.sort((t1, t2) => sortByVar(t2, t1, 'title'));            
            return {...state};
        }

        case 'SORT_DATE_UP': {
            state.tasks.sort((t1, t2) => sortByVar(t1, t2, 'date'));            
            return {...state};
        }

        case 'SORT_DATE_DOWN': {
            state.tasks.sort((t1, t2) => sortByVar(t2, t1, 'date'));            
            return {...state};
        }

        case 'ADD_TASK': {
            // const date       = (JSON.parse(JSON.stringify(new Date()))).substring(0, 10);
            const date       = convertDateToHTMLCompliantString(new Date());
            const isComplete = action.pathName === "/completed" ? true : false;
            
            const newTask = {title     : "New Task", 
                             date      : date,
                             isComplete: isComplete,
                             _id        : generateID()};

            // state.tasks.push(newTask);
            state.tasks.unshift(newTask);
            return {...state};
        }

        case 'CHECKBOX_CLICKED': {
            const tasks = state.tasks;

            const index = findTaskNumberIndexByID(tasks, action._id);
            tasks[index].isComplete = !tasks[index].isComplete;

            return {...state};
        }



        case 'EDIT_TITLE': {            
            const index = findTaskNumberIndexByID(state.tasks, action._id);
            state.tasks[index].title = action.textUpdate;

            return state;
        }

        case 'EDIT_DATE': {
            const tasks = state.tasks;

            const index = findTaskNumberIndexByID(tasks, action._id);
            tasks[index].date = action.dateUpdate;

            return {...state};
        }
        // case 'EDIT_DATE': {
        //     const index = findTaskNumberIndexByID(state.tasks, action._id);
        //     state.tasks[index].date = action.dateUpdate;

        //     return state;
        // }

        // case 'FINISHED_DATE_EDIT': {
        //     return {...state};
        // }

        case 'DELETE_TASK': {
            const tasks = state.tasks;
            const index = findTaskNumberIndexByID(tasks, action._id);

            tasks.splice(index, 1);

            return {...state};
        }

        case 'SEARCH_TITLES': {
            if(action.searchText.length > 0) {
                state.filters.searchFilter = textFilter(action.searchText);
                return {...state};
            } else {
                delete state.filters.searchFilter;    
                return {...state};
            }
        }


        case 'UPDATE_DATE_FILTER': {
            // console.log("state late:", state.dateRange.later);
            // console.log("Update date range");
            // console.log("dateType:", action.dateType);
            // console.log("newDate:", action.newDate);
            state.dateRange[action.dateType] = action.newDate; 
            // console.log("state late:", state.dateRange.later);

            if(state.filters.dateFilter) {
                const earlier = state.dateRange.earlier;
                const later = state.dateRange.later;
                state.filters.dateFilter = dateFilter(earlier, later);
                return {...state};
            }

            return state;
        }
        case 'TOGGLE_DATE_FILTER': {
            // const earlyDate = action.earlyDate;
            // const laterDate = action.laterDate;

            // console.log("DATE FILTER!");
            if(state.filters.dateFilter) {
                delete state.filters.dateFilter;
            } else {
                const earlier = state.dateRange.earlier;
                const later = state.dateRange.later;
                console.log("dateRange", earlier);
                console.log("dateRange", later);

                state.filters.dateFilter = dateFilter(earlier, later);
            }

            // console.log(earlyDate);
            // console.log(laterDate);


            return {...state};
        }



        default:
            // console.log("DEFAULT REDUCER TRIGGERED");
            // console.log("Action: ", action);
            return state;
    }
}