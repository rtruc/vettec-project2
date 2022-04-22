import { useSelector } from "react-redux";
import { List } from "../components/List/List";
import {completedFilter} from "../util/filters"


export const Completed = () => {
    
    const filters= useSelector(state => state.filters);    
    filters.pageFilter = completedFilter;

    return (
            <List />
    );
} 