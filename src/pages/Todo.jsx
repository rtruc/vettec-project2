import { useSelector } from "react-redux";
import { List } from "../components/List/List";
import {todoFilter} from "../util/filters"


export const Todo = () => {

    const filters= useSelector(state => state.filters);    
    filters.pageFilter = todoFilter;

    return (
            <List />
    );
} 