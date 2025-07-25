# Todo List Web App

This simple Todo List web application helps users stay organized by allowing them to add, track, and manage tasks easily.It's a task from ITI

## Features

- Add new todos with a title and description.
- View a progress bar showing how many tasks are completed.
- See task statistics: total tasks, completed tasks, and day streak.
- Save and load user name from `localStorage`.
- Responsive and styled using **Bootstrap** and **Font Awesome**.
- All tasks are saved using the browser's **localStorage**.

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6+)
- localStorage

---

## File Structure

project-folder/

│

├── index.html

├── CSS/

│ ├── bootstrap.min.css

│ └── style.css

├── JS/

│ ├── bootstrap.min.js

│ ├── loginAndRegister.js

│ └── main.js

---


## How It Works

### 1. **User Interface**

- Header displays a greeting and login button.
- Form input fields for todo title and description.
- Button to add the todo.
- Progress bar to show completion rate.
- Section to display task stats (total, completed, streak).
- Task list container that updates dynamically.

---

### 2. **JavaScript Functionalities**

```js
// 1. Load the username from localStorage and show it
userName.innerHTML += localStorage.getItem("User Name") || "";

// 2. Add task button event
addTaskBtn.addEventListener("click", () => {
    // Validate inputs and create a new task object
    // Save task to localStorage
    // Update UI
});

// 3. Load tasks from localStorage on page load
// 4. Update stats and progress bar
// 5. Add checkbox with unique ID using task.id for accessibility

```

---

## 3. Accessibility Considerations

- Each task checkbox uses a unique `id` based on the task's ID to support `label` accessibility.
- `aria` attributes are used in the progress bar for screen readers.

---

## Future Improvements

- Add filtering: show all, completed, uncompleted.
- Add categories or due dates.
- Support for dark/light mode.
- Allow editing tasks.

---

**Author:** Mohamed Sayed  
**Last Updated:** July 2025

