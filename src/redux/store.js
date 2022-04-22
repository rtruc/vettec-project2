import { createStore } from 'redux';
import { convertDateToHTMLCompliantString, getTasks } from '../util/data';
import { todoReducer } from './reducers/todoReducer';

let date    = new Date();
let todayString = convertDateToHTMLCompliantString(date);
date.setDate(date.getDate() - 7);
let weekAgoString = convertDateToHTMLCompliantString(date);

const tasks = getTasks();
const filters = {};
const dateRange = {earlier: weekAgoString, later: todayString };

const initState = {tasks: tasks, filters: filters, dateRange: dateRange };

export const store = createStore(todoReducer, initState); 
