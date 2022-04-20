import { List } from "../components/List/List";

// TODO: FILTER TASKS ARRAY AND PASS TODO ITEMS TO LIST

const todoFilter = (task) => {return task.isComplete === false};

export const Todo = () => {
    return (
        <>
            <List filters={[todoFilter]} />
        </>
    );
}