
export const todoFilter      = (task) => {return task.isComplete === false};
export const completedFilter = (task) => {return task.isComplete === true};
export const allFilter       = (task) => true;

export function titleFilter(searchString) {
    return function(task) {
        // console.log("SearchString: ", searchString);
        // console.log("TaskTitle: ", task.title);
        return task.title.toLowerCase().includes(searchString);
    }
}     