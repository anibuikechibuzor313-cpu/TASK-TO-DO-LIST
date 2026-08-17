const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const errorMessage = document.getElementById("errorMessage");

class Task {
    constructor(text) {
        this.text = text;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

let tasks = [];
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        const savedData = JSON.parse(savedTasks);

        tasks = savedData.map(taskData => {
            const task = new Task(taskData.text);
            task.completed = taskData.completed;
            return task;
        });
    }
}
function updateTaskCount() {
    taskCount.textContent = tasks.length;
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        if (task.completed) {
            taskItem.classList.add("completed");
        }

        taskItem.innerHTML = `
    <span>${task.text}</span>

    <button onclick="toggleTask(${index})">
        ${task.completed ? "Undo" : "Complete"}
    </button>

    <button onclick="editTask(${index})">Edit</button>

    <button onclick="deleteTask(${index})">Delete</button>
`;

        taskList.appendChild(taskItem);
    });

    updateTaskCount();
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        errorMessage.textContent = "Please enter a task.";
        return;
    }

    errorMessage.textContent = "";

    const newTask = new Task(taskText);
    tasks.push(newTask);

saveTasks();

taskInput.value = "";

displayTasks();
}

function toggleTask(index) {
    tasks[index].toggleCompleted();
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function editTask(index) {
    const task = tasks[index];

    const editContainer = document.createElement("div");
    editContainer.className = "edit-container";

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = task.text;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    editContainer.appendChild(editInput);
    editContainer.appendChild(saveButton);
    editContainer.appendChild(cancelButton);

    document.body.appendChild(editContainer);

    editInput.focus();

    saveButton.addEventListener("click", () => {
        const newText = editInput.value.trim();

        if (newText === "") {
            errorMessage.textContent = "Task cannot be empty.";
            editInput.focus();
            return;
        }

        errorMessage.textContent = "";
        task.text = newText;
        saveTasks();

        editContainer.remove();
        displayTasks();
    });

    cancelButton.addEventListener("click", () => {
        editContainer.remove();
    });
}
loadTasks();
displayTasks();
addTaskBtn.addEventListener("click", addTask);