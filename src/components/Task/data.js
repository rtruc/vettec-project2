// TEST DATA
const tasks = [
    {
        title: "Wash the Dog",
        date: "2022-04-15T01:41:51.593Z",
        isComplete: true,
        id: ""
    },
    {
        title: "Buy Groceries",
        date: "2022-04-19T01:41:51.593Z",
        isComplete: false,
        id: ""
    },
    {
        title: "Pay Bills",
        date: "2022-04-25T01:41:51.593Z",
        isComplete: true,
        id: ""
    },
    {
        title: "Mow the Lawn",
        date: "2022-04-28T01:41:51.593Z",
        isComplete: false,
        id: ""
    },
    {
        title: "Wash Dishes",
        date: "2022-04-22T01:41:51.593Z",
        isComplete: false,
        id: ""
    },
    {
        title: "Buy Plane Tickets",
        date: "2022-05-05T01:41:51.593Z",
        isComplete: false,
        id: ""
    },
    {
        title: "Visit Friends",
        date: "2022-05-19T01:41:51.593Z",
        isComplete: true,
        id: ""
    },
    {
        title: "Ship Package",
        date: "2022-04-29T01:41:51.593Z",
        isComplete: true,
        id: ""
    },
    {
        title: "Submit Assignment",
        date: "2022-04-22T01:41:51.593Z",
        isComplete: false,
        id: ""
    },
    {
        title: "Sleep",
        date: "2022-04-23T01:41:51.593Z",
        isComplete: false,
        id: ""
    }
]

export function getTasks() {
    for(let task of tasks) {
        if(task.id === "") {
            task.id = generateID();
        }
    }
    return tasks;
}


// JS RANDOM FUNCTION IS WEAK, SO NOT A GREAT ID GENERATOR, BUT IT WILL GET THE JOB DONE
function generateID() {
    const lookupString = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=~[];',./\\<>?`;
    let id = "";

    for (let i = 0; i < 33; i++) {
        let rand = parseInt(lookupString.length * Math.random());
        id += lookupString[parseInt(rand)];
    }

    return id;
}
