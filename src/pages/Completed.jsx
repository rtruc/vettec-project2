import { List } from "../components/List/List";

// TODO: FILTER TASKS ARRAY AND PASS COMPLETED ITEMS TO LIST

const completedFilter = (task) => {return task.isComplete === true};

export const Completed = () => {
    return (
        <>
            <List filters={[completedFilter]} />
        </>
    );
}