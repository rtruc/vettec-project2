export const sortTitlesAscending    = ()         => ({ type: 'SORT_ALPHA_UP'});
export const sortTitlesDescending   = ()         => ({ type: 'SORT_ALPHA_DOWN'});
export const sortDatesAscending     = ()         => ({ type: 'SORT_DATE_UP'});
export const sortDatesDescending    = ()         => ({ type: 'SORT_DATE_DOWN'});

export const addTask                = (pathName) => ({ type  : 'ADD_TASK', pathName: pathName});

export const toggleCompletionStatus = (_id)      => ({ type  : 'CHECKBOX_CLICKED', _id: _id});
export const deleteTask             = (_id)      => ({ type  : 'DELETE_TASK', _id: _id});
export const editTitle              = (_id, textUpdate) => ({ type  : 'EDIT_TITLE', _id: _id, textUpdate: textUpdate});
export const editDate               = (_id, dateUpdate) => ({ type  : 'EDIT_DATE',  _id: _id, dateUpdate: dateUpdate});
// export const finishedDateEdit       = ()                => ({ type  : 'FINISHED_DATE_EDIT'});

// export const toggleDateFilter       = (earlyDate, laterDate) => ({ type: 'TOGGLE_DATE_FILTER', earlyDate:earlyDate, laterDate: laterDate});
export const toggleDateFilter       = () => ({ type: 'TOGGLE_DATE_FILTER'});
export const updateDateFilter       = (newDate, dateType) => ({ type: 'UPDATE_DATE_FILTER', newDate: newDate, dateType: dateType});

export const searchTitles           = (searchText) => ({ type: 'SEARCH_TITLES', searchText: searchText });