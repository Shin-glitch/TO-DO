const task = document.getElementById("task_input");
// let tasks = [];
let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
const taskContainer = document.querySelector(".tasks_container");

// executes when user clicks on add task button
function addTask() {
    // storing the task in local storage
    tasks.push(task.value)
    let jsonTasks = JSON.stringify(tasks);
    localStorage.setItem("Tasks", jsonTasks);
    
    // adding a task card
    let newTaskCard = document.createElement("div");
    newTaskCard.classList.add("task_card");
    // newTaskCard.textContent = task.value;
    taskContainer.prepend(newTaskCard);
    
    // adding checkbox to task card
    let newCheckbox = document.createElement("input");
    // newCheckbox.id = "task";
    newCheckbox.classList.add("checkbox");
    newCheckbox.type = "checkbox";
    newTaskCard.prepend(newCheckbox);
    
    // adding text to task card
    let newText = document.createElement("span");
    newText.textContent = task.value;
    newText.classList.add("task_card_text");
    newTaskCard.append(newText);

    // adding delete button
    let newDelete = document.createElement("span");
    newDelete.textContent = "🗑️";
    newDelete.classList.add("delete_task");
    newTaskCard.append(newDelete);

    task.value = "";
}


// delete card
taskContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete_task")) {
        const card = event.target.parentElement;
        const taskText = card.querySelector(".task_card_text").textContent;

        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem("Tasks", JSON.stringify(tasks));

        card.remove();
    }
})

// display all tasks when page loads
document.addEventListener("DOMContentLoaded", () => {
    // tasks = JSON.parse(localStorage.getItem("Tasks"));
    tasks.forEach(element => {
        // adding a task card
        let newTaskCard = document.createElement("div");
        newTaskCard.classList.add("task_card");
        // newTaskCard.textContent = task.value;
        taskContainer.prepend(newTaskCard);
        
        // adding checkbox to task card
        let newCheckbox = document.createElement("input");
        // newCheckbox.id = "task";
        newCheckbox.classList.add("checkbox");
        newCheckbox.type = "checkbox";
        newTaskCard.prepend(newCheckbox);
        
        // adding text to task card
        let newText = document.createElement("span");
        newText.textContent = element;
        newText.classList.add("task_card_text");
        newTaskCard.append(newText);

        // adding delete button
        let newDelete = document.createElement("span");
        newDelete.textContent = "🗑️";
        newDelete.classList.add("delete_task");
        newTaskCard.append(newDelete);
        });
});
