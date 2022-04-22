import { useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "styled-components";
import { List } from "../components/List/List";
import {todoFilter} from "../util/filters"
import { juhTheme } from "../util/theme";


export const Todo = (props) => {
    
    console.log(props);
    // CONTEXT
    // const theme = useContext(ThemeContext);
    // console.log(theme.Provider);

    const filters= useSelector(state => state.filters);    
    filters.pageFilter = todoFilter;

    return (
            <List />
    );
} 