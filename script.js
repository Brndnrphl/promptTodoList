let todo = {
    list: [],
}

function startTodoApp() {
    let task = prompt("What would you like to do: ")

    switch (task) {
        case "new":
            do {
                let newTask = prompt('Enter new todo: ')
                if (newTask !== null) {
                    todo.list.push(newTask)
                }
            } while (confirm('Do you want to add another task?'))
            break;

        case "list":
            let allTasks = todo.list.map((task, index) => `${index + 1}. ${task}`).join("\n");
            alert(allTasks);
            break;

        case "delete":
            let taskDelete = prompt('Which task do you want to delete: ')
            let index = todo.list.findIndex(task => task.toLowerCase() === taskDelete.toLowerCase())
            if (index !== -1) {
                todo.list.splice(index, 1)
                alert("Task deleted successfully")
            } else {
                alert("Task not found")
            }
            break;

        case "quit":
            return;

        default:
            alert("Invalid input")
    }

    setTimeout(startTodoApp, 0)
}

startTodoApp()