
export const todoFilter      = (task) => {return task.isComplete === false};
export const completedFilter = (task) => {return task.isComplete === true};
export const allFilter       = (task) => true;
