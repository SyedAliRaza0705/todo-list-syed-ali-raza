import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter Your New Task"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do You Want To Add new Task ",
            default: "false"
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
