export const sortAlphabeticallyAscending = () => ({ type: 'SORT_ALPHA_UP'});
export const sortAlphabeticallyDescending = () => ({ type: 'SORT_ALPHA_DOWN'});
export const sortDateAscending = () => ({ type: 'SORT_DATE_UP'});
export const sortDateDescending = () => ({ type: 'SORT_DATE_DOWN'});
export const addTask = (pathName) => ({type: 'ADD_TASK', pathName: pathName});
export const toggleCompletionStatus = (id) => ({type: 'CHECKBOX_CLICKED', id: id});