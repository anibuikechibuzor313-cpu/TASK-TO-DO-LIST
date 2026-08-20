# TaskFlow - To-Do List Application

**Live Demo:** [https://anibuikechibuzor313-cpu.github.io/TASK-TO-DO-LIST/](https://anibuikechibuzor313-cpu.github.io/TASK-TO-DO-LIST/)

## Project Description

TaskFlow is a responsive web application designed to help users manage their daily tasks. Users can add tasks, view their tasks, mark tasks as completed, edit existing tasks, and delete tasks they no longer need.

## Project Requirements

1. Users can add new tasks to the task list.
2. Users can view all tasks that have been added.
3. Users can mark tasks as completed, edit tasks, and delete tasks.
4. The application saves tasks using browser Local Storage so they remain available after refreshing the page.
5. The application prevents users from adding empty or whitespace-only tasks.

## Planned Features

- Add a new task
- Display all tasks
- Mark a task as completed
- Edit an existing task
- Delete a task
- Display the total number of tasks
- Save tasks using Local Storage
- Validate user input
- Responsive user interface

## Planned JavaScript Structure

### Class

- Task

### Methods and Functions

- toggleCompleted()
- addTask()
- displayTasks()
- editTask()
- deleteTask()
- toggleTask()
- saveTasks()
- loadTasks()
- updateTaskCount()
- validateTask()

## Expected Input and Output

### Add Task

Input:

Complete JavaScript assignment

Output:

The task appears in the task list.

### Complete Task

Input:

User clicks the completion control.

Output:

The task is displayed as completed.

### Edit Task

Input:

User changes an existing task.

Output:

The updated task is displayed.

### Delete Task

Input:

User clicks the delete button.

Output:

The task is removed from the list.

### Empty Task

Input:

An empty or whitespace-only task.

Output:

An error message is displayed and the task is not added.

## Technologies

- HTML5
- CSS3
- JavaScript
- Browser Local Storage
- Git
- GitHub

## How to Run

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Open index.html in a web browser or use a local development server.
## Testing

The following features were tested successfully:

- Adding a new task
- Preventing empty tasks from being added
- Marking a task as complete
- Editing an existing task
- Saving an edited task
- Cancelling an edit
- Deleting a task
- Displaying the total number of tasks
- Saving tasks using Local Storage
- Loading saved tasks after refreshing the page
- Responsive layout on smaller screens

## Bug Fix

During development, the original edit feature used JavaScript prompt(). 
The browser environment did not support prompt(), which caused the error:

"Uncaught Error: prompt() is not supported."

The problem was fixed by replacing the prompt() approach with a custom edit interface containing a text input, Save button, and Cancel button.

After the fix, the Edit feature was tested successfully.
