import { List } from "../components/List/List";
import {allFilter} from "../util/filters"


export const All = () => {
    return (
        <>
            {/* <List filters={[allFilter]} /> */}
            <List filters={allFilter} />
        </>
    );
}