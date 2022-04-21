import { List } from "../components/List/List";
import {completedFilter} from "../util/filters"


export const Completed = () => {
    return (
        <>
            {/* <List filters={[completedFilter]} /> */}
            <List filters={completedFilter} />
        </>
    );
} 