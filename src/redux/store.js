import { createStore } from 'redux';
import { getTasks } from '../util/data';
import { todoReducer } from './reducers/todoReducer';

let date    = new Date();
let todayString = JSON.parse(JSON.stringify(date)).substring(0, 10)
// console.log(todayString);

date.setDate(date.getDate() - 7);
let weekAgoString = JSON.parse(JSON.stringify(date)).substring(0, 10)

const initData = getTasks();
// const filters = [];
// const filters = [null, null, null, null];
// const filters = Array(4);
const filters = {};
const dateRange = {earlier: weekAgoString, later: todayString };
const initBundle = {tasks: initData, filters: filters, dateRange: dateRange };

// TODO: LOOK IN TO CONFIGURE STORE ALTERNATIVE
// export const store = createStore(todoReducer, initData); 
export const store = createStore(todoReducer, initBundle); 

// console.log("Store: ", store);
