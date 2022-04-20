import { createStore } from 'redux';
import { getTasks } from './util/data';
import { todoReducer } from './reducers/todoReducer';

const initData = getTasks();

// TODO: LOOK IN TO CONFIGURE STORE ALTERNATIVE
export const store = createStore(todoReducer, initData); 

