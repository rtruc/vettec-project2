import { List } from "../components/List/List";
import {todoFilter} from "../util/filters"

export const Todo = () => {
    return (
        <>
            <List filters={[todoFilter]} />
        </>
    );
} 