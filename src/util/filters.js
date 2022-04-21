export const todoFilter      = (task) => task.isComplete === false;
export const completedFilter = (task) => task.isComplete === true;
export const allFilter       = (task) => true;

export function textFilter(searchString) {
    return function(task) {
        return task.title.toLowerCase().includes(searchString);
    }
}     

// export function dateFilter(earlier, later) {
//     return function(task) {
//         return earlier <= task.date && task.date >= later;
//     }
// }