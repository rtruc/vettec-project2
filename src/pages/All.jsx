import { List } from "../components/List/List";

const unFilter = (task) => true;

export const All = () => {
    return (
        <>
            <List filters={[unFilter]} />
        </>
    );
}