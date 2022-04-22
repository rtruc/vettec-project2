// TEST DATA
// TODO: FIGURE OUT A BETTER WAY TO STORE DATES

const tasks = [
    {
        title: "Wash the Dog",
        date: "2022-04-15",
        isComplete: true,
        _id: ""
    },
    {
        title: "Buy Groceries",
        date: "2022-04-19",
        isComplete: false,
        _id: ""
    },
    {
        title: "Pay Bills",
        date: "2022-04-25",
        isComplete: true,
        _id: ""
    },
    {
        title: "Mow the Lawn",
        date: "2022-04-28",
        isComplete: false,
        _id: ""
    },
    {
        title: "Wash Dishes",
        date: "2022-03-22",
        isComplete: false,
        _id: ""
    },
    {
        title: "Buy Plane Tickets",
        date: "2022-05-05",
        isComplete: false,
        _id: ""
    },
    {
        title: "Visit Friends",
        date: "2022-05-19",
        isComplete: true,
        _id: ""
    },
    {
        title: "Ship Package",
        date: "2022-04-29",
        isComplete: true,
        _id: ""
    },
    {
        title: "Submit Assignment",
        date: "2022-04-22",
        isComplete: false,
        _id: ""
    },
    {
        title: "Sleep",
        date: "2022-04-23",
        isComplete: false,
        _id: ""
    }
]

export function getTasks() {
    for(let task of tasks) {
        if(task._id === "") {
            task._id = generateID();
        }
    }
    return tasks;
}


// JS RANDOM FUNCTION IS WEAK, SO NOT A GREAT _id GENERATOR, BUT IT WILL GET THE JOB DONE
export function generateID() {
    const lookupString = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=~[];',.<>?`;
    let _id = "";

    for (let i = 0; i < 33; i++) {
        let rand = parseInt(lookupString.length * Math.random());
        _id += lookupString[parseInt(rand)];
    }

    return _id;
}

