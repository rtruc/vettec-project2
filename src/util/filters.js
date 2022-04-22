export const todoFilter      = (task) => task.isComplete === false;
export const completedFilter = (task) => task.isComplete === true;
export const allFilter       = (task) => true;

export function textFilter(searchString) {
    return function(task) {
        return task.title.toLowerCase().includes(searchString);
    }
}     

export function dateFilter(earlier, later) {
    return function(task) {

        // console.log(earlier <= task.date)
        // console.log("earlier:", earlier);
        // console.log("task:", task.date);
        // console.log("later:", later);
        // console.log(task.date <= later);
        // console.log("result:", earlier < task.date && task.date > later);
        // console.log("");
        
        return earlier <= task.date && task.date <= later;
    }
}