import { useSelector } from "react-redux";
import { List } from "../components/List/List";
import {allFilter} from "../util/filters"


export const All = () => {

    const filters = useSelector(state => state.filters);    
    filters.pageFilter = allFilter;

    return (
            <List />
    );
}