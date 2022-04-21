import { createStore } from 'redux';
import { getTasks } from '../util/data';
import { todoReducer } from './reducers/todoReducer';

const initData = getTasks();
// const filters = [];
// const filters = [null, null, null, null];
// const filters = Array(4);
const filters = {};
const initBundle = {tasks: initData, filters: filters }

// TODO: LOOK IN TO CONFIGURE STORE ALTERNATIVE
// export const store = createStore(todoReducer, initData); 
export const store = createStore(todoReducer, initBundle); 

console.log("Store: ", store.getState());
