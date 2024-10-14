

function main(){
    console.log(
        `
        Task Manager Menu:
        1. Add Task
        2. View Task
        3. Delete Task
        4. Edit Task
        5. Toggle Task Completion
        6. Find Task
        7. Save Tasks (Bonus)
        8. Exit
        `
    )
}

/*
    a task has: name, completion status, and an id
*/
var Tasks =[];

function addTask(){
    console.log("ADDING...");
    const name = prompt("Enter task name:");
    const task = {
        id: Tasks.length + 1,
        name: name,
        completed: `[Not Completed]`,
    }
    Tasks.push(task);
    console.log(`Task ${task.name} added`)
}

function viewTask(){
    console.log("VIEWING...");
    Tasks.forEach((task)=>{
        console.log(`${task.id}. ${task.name} - ${task.completed}`);
    })
}

function deleteTask(){
    console.log("DELETING...");
    //using splice
    const id = parseInt(prompt("Enter task id to delete:"));
    Tasks.splice(id - 1, 1);
    console.log("Task Deleted");
}

function editTask(){
    console.log("EDITING...");
    const id = parseInt(prompt("Enter task id to edit:"));
    const task = Tasks[id - 1];
    task.name = prompt("Enter new task name:");
    console.log(`Task ${task.name} edited`);
}

function toggleTaskCompletion(){
    console.log("TOGGLING...");
    const id = parseInt(prompt("Enter task id to toggle:"));
    const task = Tasks[id - 1];
    const toggleValue = task.completed;
    if(toggleValue == "[Not Completed]")
    {
        task.completed = "[Completed]"
    }
    else{
        task.completed = "[Not Completed]"
    }
    console.log("Task Toggled");
}


function findTask(){
    console.log("FINDING...");
    const name = prompt("Enter task name you want to find:");
    var newTasks = Tasks.filter((task)=>{return task.name == name});
    newTasks.forEach((task)=>{
        console.log(`${task.id}. ${task.name} - ${task.completed}`);
    })
    console.log("Task Found");
}

function saveTasks(){
    const data = JSON.stringify(Tasks);
    localStorage.setItem("tasks", data);
    console.log("Tasks Saved");
}


//load data from local storage
const data = localStorage.getItem("tasks");
const parsedData=JSON.parse(data);
if(parsedData)
{
    parsedData.forEach((task)=>Tasks.push(task));
}
    

do{
    main();
    var choice = prompt("Please enter a number 1-6");

    switch(choice){
        case "1": 
            addTask();
            break;
    
        case "2":
            viewTask(); 
            break;
    
        case "3":
            deleteTask();
            break;
    
        case "4":
            editTask();
            break;
    
        case "5":
            toggleTaskCompletion();
            break;

        case "6":
            findTask();
            break;

        case "7":
            saveTasks();
            break;
    
        case "8":
            console.log("Exiting...");
            break;
    
        default:
            console.log("Invalid choice, please pick a number 1-6");
    }

}while(choice != "8")