import { createStore } from 'redux';
import { getTasks } from './components/Task/data';
import { sorterReducer } from './reducers/reduxSorter';

const initData = getTasks();
// TODO: LOOK IN TO CONFIGURE STORE ALTERNATIVE
// Creates a store using that reducer to access data
export const store = createStore(sorterReducer, initData); 
console.log(store);
console.log(store.getState());