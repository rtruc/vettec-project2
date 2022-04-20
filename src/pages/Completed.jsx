import { List } from "../components/List/List";

const completedFilter = (task) => {return task.isComplete === true};

export const Completed = () => {
    return (
        <>
            <List filters={[completedFilter]} />
        </>
    );
}